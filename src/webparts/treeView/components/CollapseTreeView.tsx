import * as React from 'react'
import { useState } from 'react';
import { FaSitemap } from "react-icons/fa";
// import { IoDocument } from "react-icons/io5";
// import { FaBuildingUser } from "react-icons/fa6";

function CollapseTreeView() {
    const [isOpen, setIsOpen] = useState(false);
    // const [SubsiteisOpen, setSubSiteIsOpen] = useState(false);

    const [showdepartments, setShowDepartments] = useState(false);
    const [showSubsitedepartments, setShowSubSiteDepartments] = useState(false);
    const [showSubsite2departments, setShowSubSite2Departments] = useState(false);

    const [showInnerSubsitedepartments, setShowInnerSubSiteDepartments] = useState(false);
    const [showInnerSubsitedepartments2, setShowInnerSubSiteDepartments2] = useState(false);


    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    const toggleCollapseSite1 = () => {
        setShowDepartments(!showdepartments)
    }

    const toggleCollapseSubSite = () => {
        setShowSubSiteDepartments(!showSubsitedepartments)
    }
    const toggleCollapseSubSite2=()=>{
        setShowSubSite2Departments(!showSubsite2departments)
    }
    const toggleCollapseSubSiteInner = () => {
        setShowInnerSubSiteDepartments(!showInnerSubsitedepartments)
    }
    const toggleCollapseSubSiteInner2 = () => {
        setShowInnerSubSiteDepartments2(!showInnerSubsitedepartments2)
    }

  return (
    <>
    <div className="container-fluid">
        <div className=" shadow">
            <div className="row">
                <details className='mt-1 col-md-3' >
                    <summary onClick={toggleCollapseSite1} className='fs-5'><FaSitemap /> Site1</summary>

                </details>

                <div className="col-md-6 ms-3">
                    <div className="row">
                        <div className={showdepartments ? "card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Department 1</div>
                        <div onClick={toggleDrawer} className={showdepartments ? "pointer ms-1 card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Documents</div>
                    </div>

                    <div className="row">
                        <div className={showdepartments ? "card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Department 2</div>
                        <div onClick={toggleDrawer} className={showdepartments ? "pointer ms-1 card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Documents</div>
                    </div>
                </div>
            </div>

            <div className={showdepartments ? "row " : "d-none"}>
                <details className='ms-3 col-md-3'>
                    <summary onClick={toggleCollapseSubSite} className='fs-5'><FaSitemap /> Sub site 1</summary>

                </details>
                <div className="col-md-6">
                    <div className="row">
                        <div className={showSubsitedepartments ? "card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Department 1</div>
                        <div onClick={toggleDrawer} className={showSubsitedepartments ? "pointer ms-1 card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Documents</div>
                    </div>

                    <div className="row">
                        <div className={showSubsitedepartments ? "card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Department 2</div>
                        <div onClick={toggleDrawer} className={showSubsitedepartments ? "pointer ms-1 card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Documents</div>
                    </div>
                </div>
            </div>


            <div className={showSubsitedepartments ? "row " : "d-none"}>
                <details className='ms-3 ps-4 col-md-3'>
                    <summary onClick={toggleCollapseSubSiteInner} className='fs-5'><FaSitemap /> Sub site 1.1</summary>

                </details>
                <div className="col-md-6">
                    <div className="row">
                        <div className={showInnerSubsitedepartments ? "card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Department 1</div>
                        <div onClick={toggleDrawer} className={showInnerSubsitedepartments ? "pointer ms-1 card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Documents</div>
                    </div>

                    <div className="row">
                        <div className={showInnerSubsitedepartments ? "card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Department 2</div>
                        <div onClick={toggleDrawer} className={showInnerSubsitedepartments ? "pointer ms-1 card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Documents</div>
                    </div>
                </div>
            </div>



            <div className={showSubsitedepartments ? "row " : "d-none"}>
                <details className='ms-3 ps-4 col-md-3'>
                    <summary onClick={toggleCollapseSubSiteInner2} className='fs-5'><FaSitemap /> Sub site 1.2</summary>

                </details>
                <div className="col-md-6">
                    <div className="row">
                        <div className={showInnerSubsitedepartments2 ? "card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Department 1</div>
                        <div onClick={toggleDrawer} className={showInnerSubsitedepartments2 ? "pointer ms-1 card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Documents</div>
                    </div>

                    <div className="row">
                        <div className={showInnerSubsitedepartments2 ? "card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Department 2</div>
                        <div onClick={toggleDrawer} className={showInnerSubsitedepartments2 ? "pointer ms-1 card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Documents</div>
                    </div>
                </div>
            </div>

            <div className={showdepartments ? "row " : "d-none"}>
                <details className='ms-3 col-md-3'>
                    <summary onClick={toggleCollapseSubSite2} className='fs-5'><FaSitemap /> Sub site 2</summary>

                </details>
                <div className="col-md-6">
                    <div className="row">
                        <div className={showSubsite2departments ? "card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Department 1</div>
                        <div onClick={toggleDrawer} className={showSubsite2departments ? "pointer ms-1 card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Documents</div>
                    </div>

                    <div className="row">
                        <div className={showSubsite2departments ? "card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Department 2</div>
                        <div onClick={toggleDrawer} className={showSubsite2departments ? "pointer ms-1 card shadow col-md-3 pt-2" : "d-none"} style={{ height: "40px" }}>Documents</div>
                    </div>
                </div>
            </div>


            <div className={`drawer-container shadow ${isOpen ? 'open' : ''}`}>
                <div className="drawer-content">
                    {/* Your drawer content goes here */}
                    <h3>Document Details</h3>
                    <hr />
                        <p><span className='fw-bold'>Name:</span> Lorem ispum</p>
                        <p><span className='fw-bold'>Size:</span> 2Mb</p>
                        <p><span className='fw-bold'>Description:</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                </div>

            </div>

            {/* ---------------------------------------SITE 2----------------------------------- */}

            {/* <details className='p-2 mt-1'>
                <summary className='fs-5'><FaSitemap /> Site 2</summary>
                <details className='ms-3'>
                    <summary className='fs-5'><FaSitemap /> Sub site 1</summary>
                    <details className='ms-3'>
                        <summary className='fs-5'><FaBuildingUser /> Department1</summary>
                        <details className='ms-3'>
                            <summary className='fs-5'><IoDocument /> Documents</summary>
                            <ul className='ms-4'>
                                <li><span>Name:</span> Lorem ispum</li>
                                <li><span>Size:</span> 2Mb</li>
                                <li><span>BAT number:</span> 123912301938</li>
                            </ul>
                        </details>
                    </details>

                    <details className='ms-3'>
                        <summary className='fs-5'><FaBuildingUser /> Department2</summary>
                        <details className='ms-3'>
                            <summary className='fs-5'><IoDocument /> Documents</summary>
                            <ul className='ms-4'>
                                <li><span>Name:</span> Lorem ispum</li>
                                <li><span>Size:</span> 2Mb</li>
                                <li><span>Description:</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</li>
                            </ul>
                        </details>
                    </details>
                </details>

                <details className='ms-3'>
                    <summary className='fs-5'><FaSitemap /> Sub site 2</summary>
                    <details className='ms-3'>
                        <summary className='fs-5'><FaBuildingUser /> Department1</summary>
                        <details className='ms-3'>
                            <summary className='fs-5'><IoDocument /> Documents</summary>
                            <ul className='ms-4'>
                                <li><span>Name:</span> Lorem ispum</li>
                                <li><span>Size:</span> 2Mb</li>
                                <li><span>Description:</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</li>
                            </ul>
                        </details>
                    </details>

                    <details className='ms-3'>
                        <summary className='fs-5'><FaBuildingUser /> Department2</summary>
                        <details className='ms-3'>
                            <summary className='fs-5'><IoDocument /> Documents</summary>
                            <ul className='ms-4'>
                                <li><span>Name:</span> Lorem ispum</li>
                                <li><span>Size:</span> 2Mb</li>
                                <li><span>Description:</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</li>
                            </ul>
                        </details>
                    </details>

                </details>

            </details> */}
        </div>
    </div>
</>
  )
}

export default CollapseTreeView