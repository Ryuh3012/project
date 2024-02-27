import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Pagination, Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import { Navigation } from "../../Navigation";
import { useFormik } from "formik";
import { useState } from "react";

const users = [];
export const Expedientes = () => {
    const [user, setUser] = useState(users)
    const validate = (values) => {
        let errors = {}
        values.id.toString().replace(/[^0-9]*$/, '')
        if (!values.name) errors.name = 'Requiere Nombre'
        if (!values.id) errors.id = 'La Cedula muy corta'
        if (!values.email) errors.email = 'Requiere Correo'
        if (!values.lastName) errors.lastName = 'Requiere Apellido'
        if(!values.phone) errors.phone= 'Requiere Correo'
        if (!values.gender) errors.gender = 'Debe eligir un sexo'
        return errors
    }
    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            date: '',
            typeContract: '',
            status: '',
            detalles: ''
        },
        onSubmit: values => console.log(values),
        validate,
    })
    // const columns = [
    //     {
    //         key: "id",
    //         label: "id",
    //     },
    //     {
    //         key: "name",
    //         label: "nombre",
    //     },
    //     {
    //         key: "lastName",
    //         label: "apellido",
    //     },
    //     {
    //         key: "phone",
    //         label: "telefono",
    //     },
    //     {
    //         key: "email",
    //         label: "correo",
    //     },
    //     {
    //         key: "employment",
    //         label: "empleo"
    //     }
    // ];
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className="p-10 flex flex-col gap-6">
            <div className="bg-white rounded-[5px] shadow-md p-5 w-full border-[1px] border-[#C4CEDC]">
                <p className="text-[30px] font-semibold mb-5">Listado De Expedientes</p>
                <div className="flex justify-end">
                    <Button onPress={onOpen} className="bg-[#1F2559] text-white rounded-[5px] px-4 py-2  font-semibold flex justify-center items-center">Crear</Button>
                </div>
                {/* <Table
                        shadow="none"
                        aria-label="Example table with client side pagination"
                        bottomContent={
                            <div className="flex w-full justify-center">
                                <Pagination
                                    isCompact
                                    showControls
                                    showShadow
                                    color="secondary"

                                />
                            </div>
                        }
                        classNames={{
                            wrapper: "min-h-[222px]",
                        }}
                    >

                        <TableHeader columns={columns}>
                            {(column) => <TableColumn className="text-left bg-[#1F2559] text-white  px-3" key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={user}>
                            {user.map(item => (
                                <TableRow key={item.key}>
                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                </TableRow>
                            ))
                            }
                        </TableBody>
                    </Table> */}

            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <div className="bg-[#d9dbe0]">
                            <ModalHeader className="flex justify-center gap-1">Registro De Caso</ModalHeader>
                            <ModalBody>
                                <form onSubmit={formik.handleSubmit}>
                                    {formik.touched.name && formik.errors.name ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.name}</p> : null}
                                    {formik.touched.lastName && formik.errors.lastName ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.lastName}</p> : null}
                                    {formik.touched.id && formik.errors.id ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.id}</p> : null}
                                    {formik.touched.email && formik.errors.email ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.email}</p> : null}
                                    {formik.touched.gender && formik.errors.gender ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.gender}</p> : null}
                                    {formik.touched.phone && formik.errors.phone ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.phone}</p> : null}

                                    <div className='flex gap-3 items-center'>
                                        <div className="flex flex-col w-full gap-2">
                                            <label htmlFor="nombre">Nombre</label>
                                            <input
                                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                                id="name"
                                                name="name"
                                                inputMode="text"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                                placeholder="Introduce tu nombre"
                                            />
                                        </div>
                                        <div className='flex flex-col w-full gap-2'>
                                            <label htmlFor="lastName">Apellido</label>
                                            <input
                                                id="lastName"
                                                name="lastName"
                                                inputMode="text"
                                                placeholder="Introduce tu apellido"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.lastName}
                                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex w-full gap-3">
                                        <div className='flex flex-col w-full gap-2'>
                                            <label htmlFor="email">Correo</label>
                                            <input
                                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                                id="email"
                                                inputMode="email"
                                                name="email"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                                placeholder="Introduce tu correo"
                                            />
                                        </div>

                                        <div className='flex flex-col w-full gap-2'>

                                            <label htmlFor="phone">Telefono</label>
                                            <input
                                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                                id="phone"
                                                name="phone"
                                                inputMode="tel"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.phone}
                                                placeholder="Introduce tu telefono"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col w-full gap-2">
                                        <label htmlFor="id">Cédula</label>
                                        <input
                                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                            id="id"
                                            name="id"
                                            value={formik.values.id}
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            inputMode="numeric"
                                            placeholder="Introduce tu cédula"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="gender">Genero</label>
                                        <select
                                            className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                                            name="gender"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.gender}
                                        >
                                            <option value={''}></option>
                                            <option value={'hombre'}>Hombre</option>
                                            <option value={'mujer'}>Mujer</option>
                                        </select>
                                    </div>
                                    <div className="flex gap-2 m-[10px] justify-end items-center" >

                                    <Button color="danger" variant="flat" onPress={onClose}>Close</Button>
                                    <Button type='submit' color="primary" onPress={onClose}>Sign in</Button>
                                    </div>
                                </form>
                            </ModalBody>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </div >

    )
}