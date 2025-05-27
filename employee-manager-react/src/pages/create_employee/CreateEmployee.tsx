import InputBox from "../../components/input_box/InputBox";
import Input from "../../components/inputs/Input";
import Layout from "../../components/layout/Layout";
import SelectBox from "../../components/select_box/SelectBox";
import type { StatusOptions } from "../../types/SelectType";
import "./CreateEmployee.css";

const CreateEmployee = () => {
    const statusOptions: StatusOptions[] = [
        { value: "ACTIVE", text: "ACTIVE" },
        { value: "INACTIVE", text: "INACTIVE" },
        { value: "PROBRATION", text: "PROBATION" },
    ];
    const departmentOptions: StatusOptions[] = [
        { value: "Finance", text: "Finance" },
        { value: "Management", text: "Management" },
    ];
    const roleOptions: StatusOptions[] = [
        { value: "HR", text: "HR" },
        { value: "UI", text: "UI" },
        { value: "UX", text: "UX" },
        { value: "UX", text: "UX" },
    ];
    return (
        <div className="create-employee-body">
            <Layout title="Create Employee">
                
                <form>
                    <div className="formContent">
                        <div className="flex-container">
                            <InputBox
                                id="ename"
                                placeholder="Employee Name"
                                type="text"
                            />

                            <InputBox
                                id="joiningDate"
                                placeholder="Joining Date"
                                type="date"
                            />

                            <InputBox
                                id="experience"
                                placeholder="Experience"
                                type="number"
                            />

                            <SelectBox
                                id="department"
                                label="Department"
                                options={departmentOptions}
                            />

                            <SelectBox
                                id="status"
                                label="Status"
                                options={statusOptions}
                            />

                            <SelectBox
                                id="role"
                                label="Role"
                                options={roleOptions}
                            />

                            <div className="input-box">
                                <label>Address</label>
                                <Input
                                    id="line1"
                                    placeholder="Addres line 1"
                                    type="text"
                                />
                                <Input
                                    id="line1"
                                    placeholder="Addres line 1"
                                    type="text"
                                />
                                <Input
                                    id="line2"
                                    placeholder="Address line 2"
                                    type="text"
                                />
                            </div>
                        </div>
                        <Input
                            className="submit"
                            type="submit"
                            placeholder="Create"
                            id="submit"
                        />

                        <Input
                            className="reset"
                            type="reset"
                            placeholder="Reset"
                            id="reset"
                        />
                    </div>
                </form>
            </Layout>
        </div>
    );
};

export default CreateEmployee;
