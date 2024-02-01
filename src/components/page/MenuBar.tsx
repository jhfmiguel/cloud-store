export default function MenuBar() {

    return (
        <>

            <div className="flex flex-col">

                <div className="flex w-full fixed border-b-[1px] border-neutral-600 mr-2">
                    
                    <div className="flex flex-row mb-2">
                        <div id="btn-send-file" className='flex justify-center w-30 h-10 bg-sky-700 hover:bg-sky-800 shadow px-4 py-2 rounded pointer'>
                            <span>Send File</span>
                            <input type="file" id="files" className="hidden" multiple/>
                        </div>

                        <div className='flex flex-row justify-center w-30 h-10 text-base text-gray-200 hover:text-gray-400 px-4 py-2 ml-2 rounded'>
                            <span>New Folder</span>
                        </div>

                        <div className='flex flex-row justify-center w-30 h-10 text-gray-200 hover:text-gray-400 px-4 py-2 ml-2 rounded'>
                            <span>Rename</span>
                        </div>

                        <div className='flex flex-row justify-center w-30 h-10 text-gray-200 hover:text-gray-400 px-4 py-2 ml-2 rounded'>
                            <span>Delete</span>
                        </div>
                    </div>
                
                </div>

                <div id="react-snackbar-root" className="flex flex-row mt-10" style={{display:'none'}}>
                    <div data-reactroot="" className="mc-snackbar-holder-backdrop">
                        <div className="mc-snackbar">
                            <div className="mc-snackbar-container mc-snackbar-container--snackbar-icon flex flex-row w-full justify-center items-center">
                                <div className="mc-snackbar-icon">
                                    <svg width="32" height="32" viewBox="0 0 32 32" className="mc-icon-template-status mc-icon-template-status-rotating">
                                        <title>Status: Syncing</title>
                                        <path d="M16 24a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-3a5 5 0 0 0 3.467-8.602l-.57.844A4 4 0 0 1 16 20l.001-1.5-2.5 2 2.5 2V21zm0-10a5 5 0 0 0-3.667 8.399l.578-.858A4 4 0 0 1 16 12v1.5l2.5-2-2.5-2V11z"
                                            fill="#0070E0" fillRule="nonzero"></path>
                                    </svg>
                                </div>
                                <p className="mc-snackbar-title">Sendind the file <span className="filename">file.pdf</span> - <span className="timeleft">8 min</span> remaining</p>
                            </div>
                            <div className="mc-progress-bar-bg">
                                <div className="mc-progress-bar-fg" style={{width: '0%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}