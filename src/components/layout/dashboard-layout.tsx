import { Head } from '@/components/seo'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { DashboardSidebar } from '@/features/dashboard/components/sidebar/sidebar'

import { GithubLink } from '../ui/github-link'
import { ThemePopover } from '../ui/theme-customizer'
import { DarkModeToggle } from '../ui/theme-customizer/dark-mode-toggle'

interface DashboardLayoutProps extends React.ComponentProps<'div'> {
  title: string
}

export function DashboardLayout({ title, children }: DashboardLayoutProps) {
  return (
    <>
      <Head title={title} />
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex px-4">
              <ThemePopover />
              <DarkModeToggle />
              <GithubLink />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
