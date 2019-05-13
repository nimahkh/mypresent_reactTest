import React from "react";


export const DummyComponent = (props) => {
    const data=props.data;
    return (
        <React.Fragment>
            {data.map(item => (
                <div style={{textAlign:'left',borderBottom:'1px solid #ccc',fontSize:16}} key={item.id}>
                    author: {item.author.name} {item.author.family}
                    <div>
                        {item.message}
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}
