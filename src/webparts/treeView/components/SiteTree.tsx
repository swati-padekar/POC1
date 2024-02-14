import * as React from 'react'
// import { FaSitemap } from 'react-icons/fa'
import TreeNode from './TreeNode';
import { ISearchBoxStyles, SearchBox } from '@fluentui/react';
import { useState } from 'react';
import { GrClose } from "react-icons/gr";

interface SiteProps {
    name: string;
    subsites?: SiteProps[];
}
function SiteTree() {
    const [isOpen, setIsOpen] = useState(false);
    const [showDocuments, setShowDocuments] = useState(false);
    const [showDepartment, setShowDepartment] = useState<Boolean>(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    const toggleDrawer = () => {
        // setIsOpen(!isOpen);
        setIsOpen(true)
    };
    const ShowDocuments = () => {
        setShowDocuments(true)
    }
    const siteData = [
        {
            name: 'Site1',
            children: [
                {
                    name: 'Sub site 1',
                    children: [
                        {
                            name: 'Sub site 1.1',
                            children: [
                                {
                                    name: 'Sub site a',
                                    children: [{
                                        name: 'Sub site a1',
                                        children: [],
                                    },],
                                },
                                {
                                    name: 'Sub site b',
                                    children: [{
                                        name: 'Sub site b1',
                                        children: [],
                                    },],
                                },
                            ],
                        },
                        {
                            name: 'Sub site 1.2',
                            children: [],
                        },
                    ],
                },
            ],
        },

        {
            name: 'Site222',
            children: [
                {
                    name: 'Sub site 1',
                    children: [
                        {
                            name: 'Sub site 1.1',
                            children: [],
                        },
                        {
                            name: 'Sub site 1.2',
                            children: [],
                        },
                    ],
                },
            ],
        },
    ];

    const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 400 } };

    const renderSubsites = (subsites: SiteProps[] | undefined) => {
        if (!subsites) return null;

        return (
            <ul className="ulmargin">
                {subsites.map((subsite, index) => (
                    <li key={index} className="listli">
                        <div style={{ cursor: 'pointer' }} onClick={() => handleToggle()}>
                            {isExpanded ? '🔽' : '🔼'} {subsite.name}
                        </div>
                        {isExpanded && renderSubsites(subsite.subsites)}
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <>
            <div className="container mt-5">
                <div className="col-md-12">
                    <div className="row">
                        <div className="card col-md-4 rounded-0 scroll">
                            <div className="card-header rounded-0 text-bg-primary fixheader"><h5>Sites</h5></div>
                            <div className="card-body">
                                {/* <details className='mt-1 ' >
                                    <summary className='fs-5'><FaSitemap /> Site1</summary>

                                    <details className='ms-3'>
                                        <summary className='fs-5'><FaSitemap /> Sub site 1</summary>

                                        <details className='ms-3'>
                                            <summary className='fs-5'><FaSitemap /> Sub site 1.1</summary>
                                        </details>
                                        <details className='ms-3'>
                                            <summary className='fs-5'><FaSitemap /> Sub site 1.2</summary>
                                        </details>


                                    </details>


                                </details> */}

                                {/* New code summary using map and above only html*/}
                                {/* {siteData.map((node: any, index: any) => (
                                    <details className='ms-3'>
                                        <summary className='fs-5'>
                                            <FaSitemap /> {node.name}
                                        </summary>
                                        {node.children.map((child: any, index: any) => (
                                            <TreeNode key={index} node={child} />
                                        ))}
                                    </details>
                                ))} */}
                                {siteData.map((node, index) => (
                                    <TreeNode key={index} node={node} dept={setShowDepartment} crrentdept={showDepartment} />
                                ))}

                                {/* withput map only html */}
                                {/* <div style={{ cursor: 'pointer' }} onClick={handleToggle}>
                                    {isExpanded ? '🔽' : '🔼'} Site 1
                                </div>
                                <ul className='ulmargin'>
                                    <li className='listli' >
                                        <div style={{ cursor: 'pointer' }} onClick={handleToggle}>
                                            {isExpanded ? '🔽' : '🔼'} Site 2
                                        </div>
                                        <ul className='ulmargin'>
                                            <li className='listli' >
                                            </li>
                                        </ul>
                                    </li>
                                </ul> */}
                                {/* 
                                <div style={{ cursor: 'pointer' }} onClick={handleToggle}>
                                    {isExpanded ? '🔽' : '🔼'} Site 2
                                </div>
                                <ul className='ulmargin'>
                                    <li className='listli' >
                                        <div style={{ cursor: 'pointer' }} onClick={handleToggle}>
                                            {isExpanded ? '🔽' : '🔼'} Site 2
                                        </div>
                                        <ul className='ulmargin'>
                                            <li className='listli' >
                                            </li>
                                        </ul>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="card col-md-4 rounded-0 scroll">
                            <div className="card-header rounded-0 text-bg-primary"><h5>Departments</h5></div>
                            <div className="">
                                {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="tab1" data-bs-toggle="pill" href="#content1" role="tab" aria-controls="content1" aria-selected="true">sharepoint</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="tab2" data-bs-toggle="pill" href="#content2" role="tab" aria-controls="content2" aria-selected="false">.Net</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link " id="tab1" data-bs-toggle="pill" href="#content1" role="tab" aria-controls="content1" aria-selected="true">React</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="tab2" data-bs-toggle="pill" href="#content2" role="tab" aria-controls="content2" aria-selected="false">HR</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link " id="tab1" data-bs-toggle="pill" href="#content1" role="tab" aria-controls="content1" aria-selected="true">Angular</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="tab2" data-bs-toggle="pill" href="#content2" role="tab" aria-controls="content2" aria-selected="false">Tab 2</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link " id="tab1" data-bs-toggle="pill" href="#content1" role="tab" aria-controls="content1" aria-selected="true">Tab 1</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="tab2" data-bs-toggle="pill" href="#content2" role="tab" aria-controls="content2" aria-selected="false">Tab 2</a>
                                    </li>
                                </ul> */}
                                {showDepartment &&
                                    <div className=" row mt-5">
                                        <p style={{ width: "32%", backgroundColor: "darkorange", color: "white" }} role='button' className='col-md-4 border me-1 card' onClick={() => ShowDocuments()}>Sharepoint</p>
                                        <p style={{ width: "32%", backgroundColor: "cornflowerblue", color: "white" }} role='button' className='col-md-4 border me-1 card' onClick={() => ShowDocuments()}>Sharepoint</p>
                                        <p style={{ width: "32%", backgroundColor: "blueviolet", color: "white" }} role='button' className='col-md-4 border me-1 card' onClick={() => ShowDocuments()}>Sharepoint</p>

                                        <p style={{ width: "32%", backgroundColor: "darkorange", color: "white" }} role='button' className='col-md-4 border me-1 card' onClick={() => ShowDocuments()}>Sharepoint</p>
                                        <p style={{ width: "32%", backgroundColor: "cornflowerblue", color: "white" }} role='button' className='col-md-4 border me-1 card' onClick={() => ShowDocuments()}>Sharepoint</p>
                                        <p style={{ width: "32%", backgroundColor: "blueviolet", color: "white" }} role='button' className='col-md-4 border me-1 card' onClick={() => ShowDocuments()}>Sharepoint</p>

                                        <p style={{ width: "32%", backgroundColor: "darkorange", color: "white" }} role='button' className='col-md-4 border me-1 card' onClick={() => ShowDocuments()}>Sharepoint</p>
                                        <p style={{ width: "32%", backgroundColor: "cornflowerblue", color: "white" }} role='button' className='col-md-4 border me-1 card' onClick={() => ShowDocuments()}>Sharepoint</p>
                                        <p style={{ width: "32%", backgroundColor: "blueviolet", color: "white" }} role='button' className='col-md-4 border me-1 card' onClick={() => ShowDocuments()}>Sharepoint</p>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="card col-md-4 rounded-0 scroll">
                            <div className="card-header rounded-0 text-bg-primary"><h5>Documents</h5></div>
                            <div className="card-body">
                                <SearchBox
                                    styles={searchBoxStyles}
                                    placeholder="Search"
                                    onEscape={ev => {
                                        console.log('Custom onEscape Called');
                                    }}
                                    onClear={ev => {
                                        console.log('Custom onClear Called');
                                    }}
                                    onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}
                                    onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
                                />

                                {showDocuments &&
                                    <div className="d-flex justify-content-center row mt-1">
                                        <p role='button' className='col-md-3 border me-2 card documentColor' onClick={toggleDrawer}>Documents</p>
                                        <p role='button' className='col-md-3 border me-2 card documentColor' onClick={toggleDrawer}>Documents</p>
                                        <p role='button' className='col-md-3 border me-2 card documentColor' onClick={toggleDrawer}>Documents</p>
                                        <p role='button' className='col-md-3 border me-2 card documentColor' onClick={toggleDrawer}>Documents</p>
                                        <p role='button' className='col-md-3 border me-2 card documentColor' onClick={toggleDrawer}>Documents</p>
                                        <p role='button' className='col-md-3 border me-2 card documentColor' onClick={toggleDrawer}>Documents</p>
                                        <p role='button' className='col-md-3 border me-2 card documentColor' onClick={toggleDrawer}>Documents</p>
                                        <p role='button' className='col-md-3 border me-2 card documentColor' onClick={toggleDrawer}>Documents</p>
                                        <p role='button' className='col-md-3 border me-2 card documentColor' onClick={toggleDrawer}>Documents</p>

                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`drawer-container shadow ${isOpen ? 'open' : ''}`}>
                    <GrClose className='CloseDrawer' onClick={() => setIsOpen(false)} />
                    <div className="drawer-content">
                        {/* Your drawer content goes here */}
                        <h3>Document Details</h3>
                        <hr />
                        <p><span className='fw-bold'>Name:</span> Lorem ispum</p>
                        <p><span className='fw-bold'>Size:</span> 2Mb</p>
                        <p><span className='fw-bold'>Description:</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SiteTree