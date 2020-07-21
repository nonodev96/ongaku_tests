
export interface InterfaceFilterType {
  viewValue: string;
  value: string;
  frequency: {
    value: number;
    minValue: number;
    maxValue: number;
    step: number;
  };
  gain?: {
    value: number;
    minValue: number;
    maxValue: number;
    step: number;
  };
  Q?: {
    value: number;
    minValue: number;
    maxValue: number;
    step: number;
  };
}

export interface InterfaceSendDataEqualizer {
  filterTypeSelected: BiquadFilterType;
  fValue: number;
  gValue?: number;
  qValue?: number;
}
