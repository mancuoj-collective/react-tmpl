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
      <SidebarContent>
        <div />
      </SidebarContent>
      <SidebarFooter>
        <SidebarFooterUser />
      </SidebarFooter>
    </Sidebar>
  )
}
