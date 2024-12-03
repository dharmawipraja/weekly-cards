import { Dispatch, SetStateAction} from "react";
import * as Select from "@radix-ui/react-select";
import { Text } from "@radix-ui/themes";

type Props = {
  options: string[];
  placeholder: string;
  selectedValue: string;
  setSelectedValue: Dispatch<SetStateAction<string>>;
};

const Filter: React.FC<Props> = ({ options, placeholder, selectedValue, setSelectedValue }) => {
  const handleValueChange = (value: string) => {
    setSelectedValue(value)
  }

  return (
      <Select.Root value={selectedValue} onValueChange={handleValueChange}>
        <Select.Trigger className="w-56 border border-gray-300 rounded-lg">
          <Select.Value placeholder={placeholder} />
        </Select.Trigger>
        <Select.Content position="popper" className="w-56">
          <div className="p-2 bg-white border border-gray-300 rounded-lg">
            {options.map((option: string) => (
              <Select.Item key={option} value={option}>
                <Select.ItemText>
                  <Text>{option}</Text>
                </Select.ItemText>
              </Select.Item>
            ))}
          </div>
        </Select.Content>
      </Select.Root>
  )
}

export default Filter
