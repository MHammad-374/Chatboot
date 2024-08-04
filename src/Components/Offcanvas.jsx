import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar'
import CloseIcon from '@mui/icons-material/Close';

function Offcanvas({ darkmode }) {
    return (
        <>
            <a className="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <MenuIcon style={{ color: `${darkmode ? 'white' : 'black'}`, fontSize: '30px' }} />
            </a>
            <div className={`offcanvas offcanvas-start offcanvas-${darkmode ? 'black' : 'white'}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5></h5>
                    <button type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                        <CloseIcon style={{ color: `${darkmode ? 'white' : 'black'}` }} />
                    </button>
                </div>
                {/* <Sidebar darkmode={darkmode} /> */}
            </div>
        </>
    )
}

export default Offcanvas
