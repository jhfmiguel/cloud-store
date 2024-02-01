import MenuItem from "./MenuItem";
import { DocumentRequest, Folder, Share, Trash } from "../icons";

export default function Aside() {
    return (
        <aside>
            <ul className="flex flex-col z-40 fixed mt-12 bg-neutral-950 dark:bg-neutral-900 pt-2 h-full">
                <MenuItem url='/my-documents' text='My Documents' icon={ Folder }/>
                <MenuItem url='/share' text='Share' icon={ Share }/>
                <MenuItem url='/document-request' text='Document Request' icon={ DocumentRequest }/>
                <MenuItem url='/trash' text='Trash' icon={ Trash }/>
            </ul>
        </aside>
    )
}