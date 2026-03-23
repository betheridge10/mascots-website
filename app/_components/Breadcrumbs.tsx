import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: 'Home', href: '/' }, ...items]

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <div className="container">
        <ol className="breadcrumb-list" role="list">
          {allItems.map(({ label, href }, i) => {
            const isLast = i === allItems.length - 1
            return (
              <li key={label} className="breadcrumb-item">
                {i > 0 && (
                  <ChevronRight size={12} className="breadcrumb-sep" aria-hidden="true" />
                )}
                {href && !isLast ? (
                  <Link href={href} className="breadcrumb-link">{label}</Link>
                ) : (
                  <span aria-current={isLast ? 'page' : undefined}>{label}</span>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
