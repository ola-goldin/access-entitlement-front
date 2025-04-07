"use client"

import classes from './page.module.css'
import Input from '@/components/form-components/Input';
import SimpleDropdown from '@/components/form-components/SimpleDropdown';
import Card from '@/components/ui-components/Card';
import NumberBadge from '@/components/ui-components/NumberBadge';
import React, { useState } from 'react';

export default function IdQuestionsPage() {
    const options = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' },
    ];

    const [name, setName] = useState('');
    const [age, setAge] = useState<number | ''>('');
    const [selected, setSelected] = useState<string | ''>('');
    return <>
        <Card>
        <section className={`w-full rounded-[3px] pt-4 px-6 flex gap-[1.5rem] ${classes.bgHighlight}`}>
               
            </section>
            <section className={`w-full rounded-[3px] pt-4 px-6 flex gap-[1.5rem] ${classes.bgHighlight}`}>
                <Input<number>
                    name="number"
                    type="number"
                    value={age}
                    onChange={setAge}
                    placeholder="Enter your number"
                />
                 <SimpleDropdown
                    name="fruit"
                    value={selected}
                    onChange={setSelected}
                    options={options}
                    placeholder="Choose a fruit"
                />
            </section>
            <form className="max-w-sm mx-auto mt-10">
                <Input label="Name" name="name" value={name} onChange={setName} placeholder="Enter your name" />

                <Input<number>
                    label="Age"
                    name="age"
                    type="password"
                    value={age}
                    onChange={setAge}
                    placeholder="Enter your age"
                />
                <SimpleDropdown
                    label="Fruit"
                    name="fruit"
                    value={selected}
                    onChange={setSelected}
                    options={options}
                    placeholder="Choose a fruit"
                />
                <NumberBadge number={1} />
                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </Card>

    </>
}