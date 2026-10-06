import { categoryColor, type Category } from "@/lib/ideas";

export function CategoryMark({ category }: { category: Category }) {
  return <span className="inline-flex items-center gap-2" data-category-color={categoryColor(category)}>
    <span className="category-dot inline-block size-2.5 shrink-0 rounded-full" aria-hidden="true" />
    <span>{category.label}</span>
  </span>;
}