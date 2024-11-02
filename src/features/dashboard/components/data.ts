import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'

export const data = {
  user: {
    name: 'mancuoj',
    email: 'mancuoj@gmail.com',
    avatar: '/images/avatar.png',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
}
