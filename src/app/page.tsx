import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  vegan: boolean,
  id: string
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:4000/recipes')

  // delay response
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return result.json()
}

export default async function Home() {
  const recipes = await getRecipes()

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`} alt="@shadcn" />
                <AvatarFallback>
                  {recipe.title.slice(0,2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>View Recipe</Button>
              {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}
/**
* =====================================================================
*   ORIGINAL DOCUMENTATION  (Append to end of component code block)
* =====================================================================
* File Name      : page.tsx
* Component Name : Home
* Component Type : Home Page
* Date Created   : 2024-06-15
* Dev Name       : Aniket Sapra
* ------------------------------
* Question: Why was it necessary to create this component?
* Answer  : To follow standard coding guidelines.
*
* ------------------------------
* Question: What does this component do?: 
* Answer  :   It displays Home Component displaying Card Components using ShadCN.
* 
* ------------------------------
* Footnote Comments:   (Enter "none" if you have no comments)
* none
* ------------------------------
* Input Comments:     (Enter "none" if you have no comments)
* none
* ------------------------------
* Output Comments:    (Enter "none" if you have no comments)
* none
* ------------------------------
* Additional Comments:
* Question: Did you have to write any unusual code? 
* Answer  : no
*
*/