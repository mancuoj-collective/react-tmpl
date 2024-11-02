import { ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { cn } from '@/utils/cn'

import { data } from '../data'

export function SidebarHeaderMenu() {
  const [activeTeam, setActiveTeam] = useState(data.teams[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="font-inter data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <activeTeam.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm">
                <span className="truncate font-semibold">
                  {activeTeam.name}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {activeTeam.plan}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg px-2 py-3 font-inter"
            align="start"
            side="bottom"
            sideOffset={4}
          >
            {data.teams.map(team => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className={cn(
                  'gap-2 px-2 py-1',
                  activeTeam.name === team.name ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <div className="flex size-6 items-center justify-center rounded border">
                  <team.logo className="size-4 shrink-0" />
                </div>
                {team.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
