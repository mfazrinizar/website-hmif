import { ReactNode } from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from './ui/breadcrumb'
import { ArrowRight } from 'lucide-react'

type Props = {
    children: ReactNode,
    page: string,
    linkPage: String
}

export default function BreadcrumpCard({ children, page, linkPage } : Props) {
  return (
    <Breadcrumb className='font-semibold text-lg'>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <ArrowRight />
      <BreadcrumbItem>
        <BreadcrumbLink href={`/${linkPage}`}>{page}</BreadcrumbLink>
      </BreadcrumbItem>
      <ArrowRight />
      {children}
    </BreadcrumbList>
  </Breadcrumb>
  )
}
