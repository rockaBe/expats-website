import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ category }) => (
  <>
    <div class="pt-5">
      <div class="max-w-full md:max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white p-4 pt-8 border-purple-600 border-2">
        <Img alt={`${category.name}-icon`} fixed={category.icon.fixed} style={{ display: 'block', margin: '0 auto' }} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              <Link to={`/${category.slug}`}>{category.name}</Link>
            </div>
            <p class="text-grey-700 text-base"
              dangerouslySetInnerHTML={{
                __html: category.description.childMarkdownRemark.excerpt,
              }}
            />
          </div>
          <div class="px-6">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#tailwindcss</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#css</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#webdevelopment</span>
          </div>
      </div>
    </div>
  </>
)
