interface ModalInputProps {
  placeholder: string
  type: 'text' | 'number'
}

export const ModalInput = ({ placeholder, type }: ModalInputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      min={0}
      className="p-4 rounded-md bg-gray-900 text-white"
    />
  )
}
