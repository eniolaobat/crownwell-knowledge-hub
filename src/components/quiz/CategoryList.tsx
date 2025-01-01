import { Card } from "@/components/ui/card";
import { Category } from "./types";

interface CategoryListProps {
  categories: Category[];
  onCategorySelect: (categoryId: string) => void;
  correctAnswers: number;
  totalAnswered: number;
}

export default function CategoryList({
  categories,
  onCategorySelect,
  correctAnswers,
  totalAnswered,
}: CategoryListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Card
          key={category.id}
          className="p-6 cursor-pointer hover:bg-accent transition-colors"
          onClick={() => onCategorySelect(category.id)}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">{category.icon}</div>
            <h3 className="text-xl font-semibold">{category.title}</h3>
          </div>
          <p className="text-muted-foreground mb-4">{category.description}</p>
          <div className="space-y-2">
            {category.subcategories.map((subcategory, index) => (
              <div key={index} className="text-sm">
                <div className="flex justify-between items-center">
                  <span>{subcategory.title}</span>
                  <span className="text-muted-foreground">
                    {subcategory.questionCount} questions
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}