import { useState, useEffect } from 'react';
import { initialPerson } from "../utils"
import LabeledInput from './LabeledInput';
import type { Person } from '../types/person';
import localforage from 'localforage';

function savePerson(person: Person) {
    console.log("Saving person", person);
    localforage.setItem("person", person);
}

export default function PersonEditor() {
    const [person, setPerson] = useState<Person | null>(null);

    useEffect(() => {
        const getPerson = async () => {
            const person = await localforage.getItem<Person>("person");
            setPerson(person ?? initialPerson);
        }

        getPerson();
    }, [])

    useEffect(() => {
        if (person !== null) {
            savePerson(person);
        }
    }, [person])

    if (!person) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // e.preventDefault()
        const { name, value } = e.target as HTMLInputElement
        setPerson((prev) => ({ ...prev!, [name]: value }))
    }

    return (
        <div>
            <h2>Person Editor</h2>
            <form>
                <LabeledInput
                    label="First Name"
                    inputName="firstname"
                    handleChange={handleChange}
                    value={person.firstname}
                />
                <LabeledInput
                    label="Surname"
                    inputName="surname"
                    handleChange={handleChange}
                    value={person.surname}
                />
                <LabeledInput
                    label="Email"
                    inputName="email"
                    handleChange={handleChange}
                    value={person.email}
                />
                <LabeledInput
                    label="Address"
                    inputName="address"
                    handleChange={handleChange}
                    value={person.address}
                />
                <LabeledInput
                    label="Phone"
                    inputName="phone"
                    handleChange={handleChange}
                    value={person.phone}
                />
                <hr />
                <button>Submit</button>
            </form>
            <hr />
            <div>
                <pre>{JSON.stringify(person, null, 2)}</pre>
            </div>
        </div>
    )
}