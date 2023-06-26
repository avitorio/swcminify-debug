import Link from 'next/link'
import { useContext, useState } from 'react'
import { AdminLayout } from '../components'
import Modal from '../components/Modal'
import { OutstaticContext } from '../context'

export default function Collections() {
  const { collections, session, removePage } = useContext(OutstaticContext)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedCollection, setSelectedCollection] = useState('')
  const [deleting, setDeleting] = useState(false)

  const deleteCollection = async (collection: string) => {
    try {
      const owner = session?.user?.login || ''

      setShowDeleteModal(false)
      removePage(collection)
    } catch (error) {}
  }

  return (
    <AdminLayout title="Collections">
      <div className="mb-8 flex h-12 items-center">
        <h1 className="mr-12 text-2xl">Collections</h1>
        <Link href="/outstatic/collections/new">
          <div className="cursor-pointer rounded-lg border px-5 py-2.5 text-sm font-medium focus:outline-none focus:ring-4 border-gray-600 bg-gray-800 text-white hover:border-gray-600 hover:bg-gray-700 focus:ring-gray-700 no-underline">
            New Collection
          </div>
        </Link>
      </div>
      <div className="max-w-5xl w-full grid grid-cols-3 gap-6">
        {['pages'].map((collection) => (
          <div
            key={collection}
            className="relative flex p-6 justify-between items-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-slate-100"
          >
            <Link href={`/outstatic/collections/${collection}`}>
              <h5 className="text-2xl cursor-pointer font-bold tracking-tight text-gray-900 capitalize hover:text-blue-500">
                {collection}
                <span className="absolute top-0 bottom-0 left-0 right-16"></span>
              </h5>
            </Link>
            <button
              className="z-10 inline-block text-gray-500 hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
              type="button"
              onClick={() => {
                setShowDeleteModal(true)
                setSelectedCollection(collection)
              }}
            >
              <span className="sr-only">Delete content</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </AdminLayout>
  )
}
