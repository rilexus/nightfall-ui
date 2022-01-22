import React, {FC, HTMLAttributes} from 'react';

const NormalButton:FC<HTMLAttributes<HTMLButtonElement>> = (props) => <button {...props}/>;

export {NormalButton};