"use client";
import { Selectmaxoption, Selectoption1, Selectoption2, Selectoption3, Selectoption4, Selectoption5 } from "@/shared/data/forms/select2data";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Select, { Props as SelectProps } from 'react-select';

interface Option {
	value: string;
	label: string;
}

interface Optionmax {
	value: string;
	label: string;
}

const Select2 = () => {

	const [selectedOptions, setSelectedOptions] = useState<Optionmax[] | null>(null);

	const handleSelectChange = (selected: Optionmax[] | null) => {
		// Define your maximum selection limit (e.g., 2 in this example)
		const maxSelections = 3;

		if (selected && selected.length <= maxSelections) {
			setSelectedOptions(selected);
		}
	};

	const [singleSelectValue, setSingleSelectValue] = useState<Option | null>(null);
	const [multiSelectValue, setMultiSelectValue] = useState<Option[] | null>([]);
	const [isSelectDisabled, setSelectDisabled] = useState(false);

	const options: Option[] = [
		{ value: 's-1', label: 'Selection-1' },
		{ value: 's-2', label: 'Selection-2' },
		{ value: 's-3', label: 'Selection-3' },
		{ value: 's-4', label: 'Selection-4' },
		{ value: 's-5', label: 'Selection-5' },
	];

	const handleSingleSelectChange = (selectedOption: Option | null) => {
		setSingleSelectValue(selectedOption);
	};

	const handleMultiSelectChange = (selectedOptions: Option[] | null) => {
		setMultiSelectValue(selectedOptions);
	};

	const disableSelect = () => {
		setSelectDisabled(true);
	};

	const enableSelect = () => {
		setSelectDisabled(false);
	};

	// const [disabled, setDisabled] = useState(true);

	// const handleEnable = () => {
	//   setDisabled(false);
	// };

	// const handleDisable = () => {
	//   setDisabled(true);
	// };

	return (
		<Fragment>
			<Seo title={"Select2"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Basic Select2
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select name="state" options={Selectoption1} className="basic-multi-select " isSearchable
								menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption1[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Single Select With Placeholder
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select name="state" options={Selectoption3} className="js-example-placeholder-single js-states" isClearable
								menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption3[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Multiple Select
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select isMulti name="states[]" options={Selectoption2} className="js-example-basic-multiple w-full custom-multi" isSearchable
								menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption2[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>

				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Multiple Select With Placeholder
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select isMulti name="state" options={Selectoption4} className="js-example-placeholder-multiple w-full js-states"
								menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption4[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Templating
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select
								name="state"
								options={Selectoption5}
								className="js-example-templating js-persons basic-custom-select"
								menuPlacement="auto"
								classNamePrefix="Select2"
								defaultValue={[Selectoption5[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Templating Selection
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select
								name="state"
								options={Selectoption5}
								className="basic-multi-select"
								menuPlacement="auto"
								classNamePrefix="Select2"
								defaultValue={[Selectoption5[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Max Selections Limiting
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select
								isMulti
								name="states[]"
								options={Selectmaxoption}
								className="basic-multi-select"
								isSearchable
								menuPlacement="auto"
								classNamePrefix="Select2"
								value={selectedOptions}
								onChange={handleSelectChange as SelectProps<Optionmax>['onChange']} // Type assertion here
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Disabling a Select2 control
							</Card.Title>
						</Card.Header>
						<Card.Body className=" vstack gap-3">
							<Select
								className="mb-3"
								options={options}
								classNamePrefix="Select2"
								value={singleSelectValue}
								onChange={handleSingleSelectChange}
								isDisabled={isSelectDisabled}
							/>
							<Select
								className="js-example-disabled-multi"
								options={options}
								value={multiSelectValue}
								classNamePrefix="Select2"
								onChange={handleMultiSelectChange as SelectProps<Option>['onChange']}
								isMulti
								isDisabled={isSelectDisabled}
								isClearable={!isSelectDisabled}
							/>
							<div>
								<Button variant='primary-light' className="btn me-2" onClick={enableSelect}>
									Enable
								</Button>
								<Button variant='primary' className="btn" onClick={disableSelect}>
									Disable
								</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Select2;
