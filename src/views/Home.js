import React, { useState } from 'react';
import swal from 'sweetalert';

const Home = props => {
    const [usuario, setusuario] = useState("")
    const [descrip, setdescrip] = useState("")
    const [datos, setdatos] = useState([
        /* {id:2,user:"Marcia",Descr:"Juega"},
        {id:3,user:"Vitto",Descr:"Dibuja"},
        {id:4,user:"Sisi",Descr:"Programa"},
        {id:5,user:"Yara",Descr:"Programa"} */

    ]);
    const [swit, setswit] = useState(true)
    const [indice, setindice] = useState()
    const [newdescrip, setnewdescrip] = useState()

    const addtask = (e) => {
        e.preventDefault()

        if (usuario == "") { swal("Falta agregar nombre de usuario") }
        else if (descrip == "") { swal("Falta agregar descripcion del usuario") }

        else {
            setdatos([
                ...datos,
                /* {id:1,user:"Marcia", Descr:"Juega"} */
                { id:datos.length+1, user: usuario, Descr: descrip },
            ]
            )
            swal("Se agrego correctamente el registro")
        }

        resetFormulario()
        /* setusuario("")
        setdescrip("")
 */
    }

    const resetFormulario = () => {
        setusuario("")
        setdescrip("")
    }

    const moditask = (e) => {
        e.preventDefault()
        datos[indice].Descr = newdescrip
        setswit(!swit)
    }

    const deletetask = (currentdatos) => {
        const copydatos = datos
        const newdatos = copydatos.filter((copydatos) => copydatos !== currentdatos)
        setdatos(newdatos)
    }


    return (

        <div className="container mt-5">
            <div className="row">
                {swit ?
                    <div id="columna1" className="col-4">

                        <div className="row-12 ">
                            <h1>Crear Tarea</h1>
                        </div>

                        <div className="row-12">

                            <form onSubmit={(e) => {
                                /* if (usuario==""){swal("warning")}
                                else if (descrip==""){swal("warning")} */
                                addtask(e)
                            }}>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Usuario</label>
                                    <input value={usuario} onChange={(e) => {
                                        setusuario(e.target.value)
                                        /* console.log(e)
                                        console.log(e.target)
                                        console.log(e.target.value) */

                                    }}
                                        type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Descripción</label>
                                    <input value={descrip} onChange={(e) => {
                                        setdescrip(e.target.value)
                                    }} type="text" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Agregar</button>

                            </form>
                        </div>

                    </div> 
                    :
                    <div id="columna1" className="col-4">

                        <div className="row-12 ">
                            <h1>Editando</h1>
                        </div>

                        <div className="row-12">

                            <form onSubmit={(e) => {
                                moditask(e)
                            }}>

                                {/* <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Usuario</label>
                                    <input value={usuario} onChange={(e) => {
                                        setusuario(e.target.value)
                                    }}
                                        type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div> */}

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Descripción</label>
                                    <input value={newdescrip} onChange={(e) => {
                                        setnewdescrip(e.target.value)
                                        console.log(newdescrip)
                                    }} type="text" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button id="bedit" type="submit" className="btn btn-success">Editar</button>
                                <button id="bcancel" type="button" className="btn btn-danger" onClick={()=> setswit(!swit) }>Cancelar</button>

                            </form>
                        </div>
                    </div>}


                <div id="columna2" className="col">
                    <table id="Table" class="table">
                        <thead>
                            <tr>
                                <th scope="col ">Id</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody >
                            {/* <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr> */}
                            {datos.map((i, index) => {
                                return (
                                <tr>
                                    <th scope="row">{i.id}</th>
                                    <td>{i.user}</td>
                                    <td>{i.Descr}</td>
                                    <td>
                                        <i className="text-success far fa-edit" onClick={() => {
                                            /* swal("Good job!", "You clicked the button!", "success") */
                                            setswit(!swit)
                                            setindice(index)
                                            setnewdescrip(i.Descr)
                                            console.log(indice)
                                            console.log(swit)
                                        }}></i>

                                        <i className="btn fas fa-trash" onClick={() => {
                                            deletetask(i)
                                            swal("Seguro?", "You clicked the button!", "warning")
                                        }}></i>
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;