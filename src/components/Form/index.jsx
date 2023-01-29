import React from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FormComp = ({confirmPurchase,formVis,setFormVis}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (dataDelFormulario) => {
    confirmPurchase(dataDelFormulario)
  }; // your form submit function which will invoke after successful validation

 const handleClose= ()=>{
  setFormVis(false);
 }

  return (

    <>
   

    <Modal show={formVis} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <form className='fond' onSubmit={handleSubmit(onSubmit)}>
      <Modal.Body> 
     <div className='formulario'>
      <label className='d-block text-light'>Nombre</label>
      <input
        {...register("nombre", {
          required: true,
          minLength: 2,
        })}
      />
      {errors?.nombre?.type === "required" && <p>El campo nombre es requerido</p>}
      {errors?.nombre?.type === "minLength" && (
        <p>El nombre debe superar los 2 caracteres</p>
      )}
     
      <label className='d-block text-light ' >Email</label>
      <input className='d-block '  type="email"{...register("email", { minLength:3 , required:true})} />
      {errors?.email?.type === "minLength" && (
        <p>El email por lo menos debe tener 3 caracteres</p>
      )}
       {errors?.email?.type === "required" && <p>El campo email es requerido</p>}
      <label className='text-light'>Celular</label>
      <input className='d-block' type="number" {...register("phone", { min:9,maxLength:9, required:true })} />
      {errors?.phone?.type === "minLength"&& (
        <p>El celular debe tener 9 digitos</p>
      )}
       {errors?.phone?.type === "required" && <p>El campo telefono es requerido</p>}
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

        <Button className='' variant="primary" type="submit">
          Confirm purchase
        </Button>
      </Modal.Footer>
      </form>
    </Modal>
  </>
  );
      };
  

export default FormComp