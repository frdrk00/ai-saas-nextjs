'use client'

import { test } from 'node:test'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const testimonials = [
  {
    name: 'Frederick',
    avatar: 'F',
    title: 'Software Engineer',
    description:
      'I have been using this app for a while now and I can say it has been a great experience. I have been able to track my expenses and save more money. I would recommend this app to anyone who wants to save more money.',
  },
  {
    name: 'Jayne',
    avatar: 'E',
    title: 'Nutritionist',
    description:
      'I have been using this app for a while now and I can say it has been a great experience. I have been able to track my expenses and save more money. I would recommend this app to anyone who wants to save more money.',
  },
  {
    name: 'Jacob',
    avatar: 'J',
    title: 'Architect',
    description:
      'I have been using this app for a while now and I can say it has been a great experience. I have been able to track my expenses and save more money. I would recommend this app to anyone who wants to save more money.',
  },
  {
    name: 'Yaro',
    avatar: 'Y',
    title: 'Driver',
    description:
      'I have been using this app for a while now and I can say it has been a great experience. I have been able to track my expenses and save more money. I would recommend this app to anyone who wants to save more money.',
  },
]

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default LandingContent
