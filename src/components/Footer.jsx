import { platformLinks, resourcesLinks , communityLinks} from "../constants"

const Footer = () => {
  return (
    <footer className="md:ml-20 ml-4 mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 ">
        <div>
            <h3 className="text-md font-semibold mb-4">Resource</h3>
            <ul className="space-y-2">
                {resourcesLinks.map((link, index) => (
                   <li key={index} >
                    <a className="text-neutral-400 hover:text-white" href={link.href}>{link.text}</a>
                   </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-md font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
                {platformLinks.map((link, index) => (
                   <li key={index} >
                    <a className="text-neutral-400 hover:text-white" href={link.href}>{link.text}</a>
                   </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                   <li key={index} >
                    <a className="text-neutral-400 hover:text-white" href={link.href}>{link.text}</a>
                   </li>
                ))}
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer