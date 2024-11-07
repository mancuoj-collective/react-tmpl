import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'

import { SidebarFooterUser } from './sidebar-footer-user'
import { SidebarHeaderMenu } from './sidebar-header-menu'

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarHeaderMenu />
      </SidebarHeader>
      <Separator className="my-4" />
      <SidebarContent>
        <div />
      </SidebarContent>
      <Separator className="my-4" />
      <SidebarFooter>
        <SidebarFooterUser />
      </SidebarFooter>
    </Sidebar>
  )
}
