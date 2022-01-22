import React, {FC, HTMLAttributes} from 'react';

const NormalInput:FC<HTMLAttributes<HTMLInputElement>> = (props) => <input {...props}/>;

export {NormalInput};