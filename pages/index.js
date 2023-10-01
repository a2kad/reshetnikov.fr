import Image from 'next/image'
import { Inter } from 'next/font/google'
import ContainerFluidBreakpointExample from '@/components/ContainerFluidBreakpointExample'
import AutoLayoutExample from '@/components/AutoLayoutExample'
import ContainerOutside from '@/components/ContainerOutside'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <ContainerOutside/>
    </>
  )
}
