import { HomeIcon, SearchIcon, LibraryIcon, HeartIcon, RssIcon, PlusCircleIcon } from '@heroicons/react/outline';

function Sidebar() {
    return (
        <div className="text-gray-500 p-5 x-sm border-r border-gray-900">
        <div className="space-y-4">
            <button className="flex items-center space-x-2 hover:text-white">
            <HomeIcon className="h-5 w-5" />
            <p>Home</p>
            </button>
             <button className="flex items-center space-x-2 hover:text-white">
            <SearchIcon className="h-5 w-5" />
            <p>Search</p>
             </button>
             <button className="flex items-center space-x-2 hover:text-white">
            <LibraryIcon className="h-5 w-5" />
            <p>Library</p>
             </button>
             <hr className="border-t-[0.1px]" />
             <button className="flex items-center space-x-2 hover:text-white">
            <PlusCircleIcon className="h-5 w-5" />
            <p>Create a playlist</p>
             </button>
             <button className="flex items-center space-x-2 hover:text-white">
            <HeartIcon className="h-5 w-5" />
            <p>Liked songs</p>
             </button>
             <button className="flex items-center space-x-2 hover:text-white">
            <RssIcon className="h-5 w-5" />
            <p>Your episodes</p>
            </button>
            <hr className="border-t-[0.1px]" />
            <p className="cursor-pointer hover: text-white">Playlist here</p>
            <p className="cursor-pointer hover: text-white">Playlist here</p>
            <p className="cursor-pointer hover: text-white">Playlist here</p>
            <p className="cursor-pointer hover: text-white">Playlist here</p>
            <p className="cursor-pointer hover: text-white">Playlist here</p>
            <p className="cursor-pointer hover: text-white">Playlist here</p>
            <p className="cursor-pointer hover: text-white">Playlist here</p>
            <p className="cursor-pointer hover: text-white">Playlist here</p>
            <p className="cursor-pointer hover: text-white">Playlist here</p>
        </div>
    </div>
    )
}

export default Sidebar;
