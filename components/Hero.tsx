import SITE from 'config/site'
import Logos from 'components/Logos'
import SearchBar from './SearchBar'

export default function Hero() {
  return (
    <div className="bg-white">
      <div>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={SITE.heroImage}
                    alt="People working on laptops"
                  />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h3 className="text-center text-4xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                    <span className="block text-white">{SITE.description}</span>
                  </h3>

                  <div className="mt-10 w-lg max-w-lg mx-auto  sm:flex sm:justify-center">
                      <SearchBar />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Logos />
        </div>
      </div>
    </div>
  )
}
