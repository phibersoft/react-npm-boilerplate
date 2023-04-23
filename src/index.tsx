import {FC} from 'react';

export type PhiberTestCompProps = {
    name: string;
    age: number;
}

export const PhiberTestComp: FC<PhiberTestCompProps> = ({name, age}) => {
    return (
        <div>
            <h1>Hi, I am {name} and I am {age} years old</h1>
        </div>
    )
}

export default PhiberTestComp;