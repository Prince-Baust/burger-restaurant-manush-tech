import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/customerForm.module.css';
import { useForm } from 'react-hook-form';

const CustomerForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate('/burger');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.formLabel}>Full Name</label>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter Your Name"
          {...register('name', {
            required: 'Name is required!',
            maxLength: {
              value: 32,
              message: 'Name cannot exceed 32 characters',
            },
          })}
        />
        {errors.name && (
          <p className={styles.errColor}>{errors.name.message}</p>
        )}
        <label className={styles.formLabel}>Mobile Number</label>
        <input
          className={styles.formInput}
          type="tel"
          placeholder="Enter Your Mobile No."
          {...register('mobile', {
            required: 'Mobile number is required!',
            pattern: {
              value: /^(?:\+?88)?01[0-9]\d{8}$/,
              message: 'Enter valid bangladeshi number!',
            },
            min: {
              value: 11,
              message: 'Number is too short',
            },
            maxLength: {
              value: 14,
              message: 'Number is too long',
            },
          })}
        />
        {errors.mobile && (
          <p className={styles.errColor}>{errors.mobile.message}</p>
        )}
        <input
          className={styles.formSubmit}
          type="submit"
          value="proceed to order"
        />
      </form>
    </div>
  );
};

export default CustomerForm;
