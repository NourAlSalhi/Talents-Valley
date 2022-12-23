import React from 'react'
import Header from '../../Header/Header'
import Menu from '../../Invoiuces/Menu/Menu'
import { useForm } from 'react-hook-form'
import Input from '../../../hooks/HookForm/Input/Input'
import Select from '../../../hooks/HookForm/Select/Select'
//style
import { Container, InvoiuceRecords } from './RecordsStyle'
import { Label, InputStyle } from '../../../hooks/HookForm/Input/style'
import { SelectStyle } from '../../../hooks/HookForm/Select/SelectStyle'
import Button from '../../../hooks/HookForm/Button/Button'
const InvoiceRecords = () => {
  const { register, handleSubmit } = useForm()
  return (
    <div>
      <Header />
      <Container>
        <Menu />
        <div>
          <h2>Create Invoice Records</h2>
          <InvoiuceRecords >
            <form >
              {/*-------------------------  Freelancer ------------------------------------*/}
              <Input register={register} value="Freelancer Name" name="freelancer" type="text" />
              <div className='dateStatus'>
                <div className='ds'>
                  <Label>Date</Label>
                  <InputStyle className='dateInput' type="date" {...register("date")} />
                </div>
                <div className='ds'>
                  <Label>Status</Label>
                  <SelectStyle className='dateInput' type="select" {...register("status")} >
                    <option value=" "> </option>
                    <option value='Completed'>Completed</option>
                  </SelectStyle>
                </div>
              </div>
              <Select register={register} title='Service Number (Optional)' name='service' option1='driving_license' />
              {/*-------------------------  Client ------------------------------------*/}
              <div className='CI'>
                <Label>Client Information</Label>
                <div className='clientInput'>
                  <InputStyle placeholder='First name' className='client' type="text" {...register("client")} />
                  <InputStyle placeholder='Last name' className='client' type="text" {...register("client")} />
                </div>
                <InputStyle placeholder='Email' style={{ marginTop: '12px' }} register={register} name="email" type="email" />
                <div className='clientInput' style={{ marginTop: '3px' }}>
                  <SelectStyle style={{ width: '552px' }} type="select" {...register("country")} >
                    <option value=" "> </option>
                    <option value='UAE'>UAE</option>
                  </SelectStyle>
                  <SelectStyle style={{ width: '195px' }} type="select" {...register("$")} >
                    <option value=" "> </option>
                    <option value='USD'>USD</option>
                  </SelectStyle>
                </div>
              </div>
              {/*-------------------------  Job ------------------------------------*/}
              <div className='job'>
                <Label>Job Details</Label>
                <div className='clientInput'>
                  <InputStyle placeholder='Job title' className='client' type="text" {...register("client")} />
                  <InputStyle placeholder='$ 0.00' className='client' type="text" {...register("client")} />
                </div>
                <textarea placeholder='Describtion'  {...register("describtion")} />
              </div>
              {/*-------------------------  Payment ------------------------------------*/}
              <Select register={register} title='Payment Method' name='payment' option1='' option2='Paypal' />
              <Input register={register} value="Other Payment" name="otherPayment" type="text" />
              <div className='payment'>
                <Label>Payment Gateway Fees</Label>
                <InputStyle className='paymentInput' type="text" {...register("payment")} />
              </div>
              <input id='verified' type='checkbox' {...register('verified')}  />
              <Label className='check' htmlFor='verified'>Allow Verified</Label>
              <Button type='button' value='Add Invoice' />
            </form>
          </InvoiuceRecords>
        </div>
      </Container>
    </div>
  )
}

export default InvoiceRecords