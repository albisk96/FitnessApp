// import React from 'react';
// import './input.css';

// export const InputFeedback = ({ error }) =>
//   error ? <div className="input-feedback">{error}</div> : null;

// export const Label = ({ error, className, children, ...props }) => {
//   return (
//     <label className="label" {...props}>
//       {children}
//     </label>
//   );
// };

// export const TextInput = ({ type, id, label, error, value, onChange, className, ...props }) => {
//   const classes = () => (
//     'input-group',
//     {
//       'animated shake error': !!error,
//     },
//     className
//   );
//   return (
//     <div className={classes}>
//       <Label htmlFor={id} error={error}>
//         {label}
//       </Label>
//       <input
//         id={id}
//         className="text-input"
//         type={type}
//         value={value}
//         onChange={onChange}
//         {...props}
//       />
//       <InputFeedback error={error} />
//     </div>
//   );
// };