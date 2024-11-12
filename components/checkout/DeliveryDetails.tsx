import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";

const DeliveryDetails = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>DELIVERY ADDRESS</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">
                Name<span className="ml-1 text-blue-700">*</span>
              </Label>
              <Input id="name" placeholder="Enter name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="number">
                Phone Number<span className="ml-1 text-blue-700">*</span>
              </Label>
              <Input id="number" placeholder="Enter phone number" />
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="city">City</Label>
                <Select>
                  <SelectTrigger id="city">
                    <SelectValue placeholder="Published" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="loc-1">Location 1</SelectItem>
                    <SelectItem value="loc-2">Location 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="district">
                  District<span className="ml-1 text-blue-700">*</span>
                </Label>
                <Input id="district" placeholder="Enter district" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 w-full">
              <Label htmlFor="address">
                Address<span className="ml-1 text-blue-700">*</span>
              </Label>
              <Input id="name" placeholder="Enter address" />
            </div>
          </div>
          <div className="flex items-center space-x-3 my-6">
            <Checkbox id="default-address" />
            <label
              htmlFor="default-address"
              className="text-sm text-brandSecondary"
            >
              Set as default delivery address
            </label>
          </div>
          <div className="flex justify-end gap-5 mb-3">
            <Button type="button" className="px-6" variant="outline">
              Cancel
            </Button>
            <Button variant="yellow">Add Address</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default DeliveryDetails;
