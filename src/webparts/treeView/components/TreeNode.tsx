import * as React from 'react'
import { useState } from 'react';
// import { FaSitemap } from 'react-icons/fa'

function TreeNode({ node, dept, crrentdept }: any) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
        dept(!isExpanded)
    };



    // function handleclick(){
    //     dept(true)
    // }
    return (
        <div>
            {/* <details className='ms-3'>
        <summary className='fs-5'>
          <FaSitemap /> {node.name}
        </summary>
        {node.children && node.children.length > 0 && (
          <div className="ms-3">
            {node.children.map((child:any, index:any) => (
              <TreeNode key={index} node={child} />
            ))}
          </div>
        )}
      </details> */}

            <div style={{ cursor: 'pointer' }} onClick={handleToggle}>
                {isExpanded ? '🔽' : '🔼'} {node.name}
            </div>
            {isExpanded && node.children && node.children.length > 0 && (
                <ul className='ulmargin'>
                    {node.children.map((child: any, index: any) => (
                        <li className='listli' key={index}>
                            <TreeNode node={child} dept={dept} crrentdept={crrentdept}/>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}



export default TreeNode;
