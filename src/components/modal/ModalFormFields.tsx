'use client'

import React from 'react'
import {FiX, FiChevronDown, FiCheckCircle} from 'react-icons/fi'

export const inputClasses =
    'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 font-Montserrat placeholder:text-gray-400 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive'

export const labelClasses = 'block text-sm font-semibold text-gray-700 font-Montserrat mb-2'

function Label({htmlFor, label, required}: { htmlFor?: string; label: string; required?: boolean }) {
    return (
        <label htmlFor={htmlFor} className={labelClasses}>
            {label}
            {required && <span className="text-terracotta"> *</span>}
        </label>
    )
}

export function ModalHeader({eyebrow, title, onClose}: { eyebrow: string; title: React.ReactNode; onClose: () => void }) {
    return (
        <div className="flex items-start justify-between gap-6 mb-8">
            <div>
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    {eyebrow}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 font-MonaSans leading-tight mt-2">
                    {title}
                </h2>
            </div>
            <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors"
            >
                <FiX size={18} aria-hidden="true"/>
            </button>
        </div>
    )
}

export function FormSection({title, children}: { title: string; children: React.ReactNode }) {
    return (
        <fieldset className="space-y-5">
            <legend className="text-base font-bold text-gray-900 font-MonaSans mb-4">{title}</legend>
            {children}
        </fieldset>
    )
}

export function TextField({id, name, label, type = 'text', required, autoComplete, placeholder}: {
    id: string
    name: string
    label: string
    type?: string
    required?: boolean
    autoComplete?: string
    placeholder?: string
}) {
    return (
        <div>
            <Label htmlFor={id} label={label} required={required}/>
            <input id={id} name={name} type={type} required={required} autoComplete={autoComplete}
                   placeholder={placeholder} className={inputClasses}/>
        </div>
    )
}

export function TextAreaField({id, name, label, required, placeholder}: {
    id: string
    name: string
    label: string
    required?: boolean
    placeholder?: string
}) {
    return (
        <div>
            <Label htmlFor={id} label={label} required={required}/>
            <textarea id={id} name={name} required={required} rows={4} placeholder={placeholder}
                      className={`${inputClasses} resize-y`}/>
        </div>
    )
}

export function SelectField({id, name, label, options, required}: {
    id: string
    name: string
    label: string
    options: string[]
    required?: boolean
}) {
    return (
        <div>
            <Label htmlFor={id} label={label} required={required}/>
            <div className="relative">
                <select id={id} name={name} required={required} defaultValue=""
                        className={`${inputClasses} appearance-none pr-10`}>
                    <option value="" disabled>Select an option</option>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <FiChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    aria-hidden="true"
                />
            </div>
        </div>
    )
}

export function CheckboxGroup({name, label, options, required, error}: {
    name: string
    label: string
    options: string[]
    required?: boolean
    error?: string
}) {
    return (
        <div role="group" aria-label={label}>
            <Label label={label} required={required}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {options.map((option) => (
                    <label key={option}
                           className="flex items-center gap-3 rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-700 font-Montserrat cursor-pointer hover:border-olive has-[:checked]:border-olive has-[:checked]:bg-olive/5 transition-colors">
                        <input type="checkbox" name={name} value={option} className="accent-olive w-4 h-4"/>
                        {option}
                    </label>
                ))}
            </div>
            {error && <p className="text-sm text-terracotta font-Montserrat mt-2">{error}</p>}
        </div>
    )
}

export function RequiredNote() {
    return (
        <p className="text-xs text-gray-500 font-Montserrat">
            Fields marked with <span className="text-terracotta">*</span> are required.
        </p>
    )
}

export function SubmitButton({children = 'Submit'}: { children?: React.ReactNode }) {
    return (
        <button
            type="submit"
            className="w-full md:w-auto bg-olive text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
        >
            {children}
        </button>
    )
}

export function SuccessMessage({title, message}: { title: string; message: string }) {
    return (
        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
            <FiCheckCircle className="mx-auto text-olive mb-4" size={36} aria-hidden="true"/>
            <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-2">{title}</h3>
            <p className="text-sm text-gray-500 font-Montserrat leading-relaxed">{message}</p>
        </div>
    )
}
