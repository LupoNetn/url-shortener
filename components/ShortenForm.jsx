import React, { useState } from 'react'

const ShortenForm = () => {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const shortenUrl = async (e) => {
    e.preventDefault()
    
    // Validate URL format
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      setError('Please enter a valid URL starting with http:// or https://')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://cleanuri.com/api/v1/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `url=${encodeURIComponent(url)}`
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.result_url) {
        setShortUrl(data.result_url)
      } else if (data.error) {
        setError(data.error)
      } else {
        setError('Failed to shorten URL')
      }
    } catch (err) {
      console.error('Error details:', err)
      setError('Failed to shorten URL. Please make sure the URL is valid and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="relative mx-auto w-full max-w-[1100px] -mb-[72px] px-6">
        <div className="primary-violet p-10 rounded-lg bg-boost-mobile md:bg-boost-desktop bg-cover bg-no-repeat">
          <form onSubmit={shortenUrl} className="flex flex-col md:flex-row gap-4">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Shorten a link here..."
              required
              className="flex-1 p-3 rounded-lg bg-white text-neutral-dark-violet placeholder:text-neutral-gray focus:outline-none focus:ring-2 focus:ring-primary-cyan"
            />
            <button 
              type="submit"
              disabled={loading}
              className="primary-cyan text-white font-bold py-3 px-8 rounded-lg hover:opacity-70 md:w-auto w-full disabled:opacity-50"
            >
              {loading ? 'Shortening...' : 'Shorten It!'}
            </button>
          </form>
          {error && <p className="text-secondary-red mt-2 text-sm">{error}</p>}
        </div>
      </div>

      {/* Show shortened URL if available */}
      {shortUrl && (
        <div className="mx-auto w-full max-w-[1100px] px-6 mt-20">
          <div className="bg-white rounded-lg flex flex-col md:flex-row md:items-center justify-between p-4 shadow-sm">
            <p className="text-neutral-dark-violet truncate">{url}</p>
            <div className="flex flex-col md:flex-row gap-2 items-center border-t md:border-0 mt-2 pt-2 md:mt-0 md:pt-0">
              <p className="text-primary-cyan">{shortUrl}</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shortUrl)
                }}
                className="primary-cyan text-white font-bold py-2 px-6 rounded-lg w-full md:w-auto hover:opacity-70"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ShortenForm