import MealDisplay from "@/components/dashboard/MealDisplay"
import React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Dashboard: React.FC = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-blue-100'>
      {/* Your dashboard content */}
      <div className='p-6 bg-yellow-100'>
        <h1 className='text-6xl text-red-400'>Welcome to Your Dashboard</h1>
        <Tabs
          defaultValue='favorites'
          className='lg:w-[1000px] md:w-[600px] w-[400px]'
        >
          <TabsList className='grid w-full grid-cols-4'>
            <TabsTrigger value='meals'>Explore Meals</TabsTrigger>
            <TabsTrigger value='recents'>Recent Meals</TabsTrigger>
            <TabsTrigger value='suggestions'>Suggestions</TabsTrigger>
            <TabsTrigger value='random'>Random Meals</TabsTrigger>
          </TabsList>
          <TabsContent value='meals'>
            <Card>
              <CardHeader>
                <CardTitle>Meals</CardTitle>
                <CardDescription>
                  {/* Meals Display */}
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                  <MealDisplay />
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value='recents'>
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <div className='space-y-1'>
                  <Label htmlFor='current'>Current password</Label>
                  <Input id='current' type='password' />
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='new'>New password</Label>
                  <Input id='new' type='password' />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value='suggestions'>
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <div className='space-y-1'>
                  <Label htmlFor='current'>Current password</Label>
                  <Input id='current' type='password' />
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='new'>New password</Label>
                  <Input id='new' type='password' />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value='random'>
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <div className='space-y-1'>
                  <Label htmlFor='current'>Current password</Label>
                  <Input id='current' type='password' />
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='new'>New password</Label>
                  <Input id='new' type='password' />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Recipes Display */}
          <div>
            <h1>Favorite Recipes</h1>
          </div>
          {/* Foods Display */}
          {/* Nutrition Goals Display */}
          {/* Water Intake Display */}
        </Tabs>
      </div>
    </div>
  )
}

export default Dashboard
