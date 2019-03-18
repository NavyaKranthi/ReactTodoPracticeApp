import React from "react"

const Ninja1 = ({ninjas, deleteNinja}) => {
    // const { ninjas } = props
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 25) {
    //         return (
    //             <div className="ninja" key={ninja.id}>
    //                 <div>Name: {ninja.name}</div>
    //                 <div>Age: {ninja.age}</div>
    //                 <div>Belt: {ninja.belt}</div>
    //             </div>
    //         )
    //     }
    //     else {
    //         return null;
    //     }
    // })




    // const ninjaList = ninjas.map(ninja => {
    //     return ninja.age > 25 ? (
    //     <div className="ninja" key={ninja.id}>
    //         <div>Name: {ninja.name}</div>
    //         <div>Age: {ninja.age}</div>
    //         <div>Belt: {ninja.belt}</div>
    //     </div>
    //     ) : null;
    // })


    const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 25) {
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
                </div>
            )
        }
        else {
            return null;
        }
    })
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    );
}
export default Ninja1;