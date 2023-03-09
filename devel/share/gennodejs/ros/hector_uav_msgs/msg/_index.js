
"use strict";

let ControllerState = require('./ControllerState.js');
let YawrateCommand = require('./YawrateCommand.js');
let ThrustCommand = require('./ThrustCommand.js');
let RC = require('./RC.js');
let MotorCommand = require('./MotorCommand.js');
let HeadingCommand = require('./HeadingCommand.js');
let Supply = require('./Supply.js');
let MotorStatus = require('./MotorStatus.js');
let Compass = require('./Compass.js');
let VelocityXYCommand = require('./VelocityXYCommand.js');
let PositionXYCommand = require('./PositionXYCommand.js');
let MotorPWM = require('./MotorPWM.js');
let ServoCommand = require('./ServoCommand.js');
let HeightCommand = require('./HeightCommand.js');
let RuddersCommand = require('./RuddersCommand.js');
let RawMagnetic = require('./RawMagnetic.js');
let VelocityZCommand = require('./VelocityZCommand.js');
let RawRC = require('./RawRC.js');
let RawImu = require('./RawImu.js');
let Altimeter = require('./Altimeter.js');
let AttitudeCommand = require('./AttitudeCommand.js');

module.exports = {
  ControllerState: ControllerState,
  YawrateCommand: YawrateCommand,
  ThrustCommand: ThrustCommand,
  RC: RC,
  MotorCommand: MotorCommand,
  HeadingCommand: HeadingCommand,
  Supply: Supply,
  MotorStatus: MotorStatus,
  Compass: Compass,
  VelocityXYCommand: VelocityXYCommand,
  PositionXYCommand: PositionXYCommand,
  MotorPWM: MotorPWM,
  ServoCommand: ServoCommand,
  HeightCommand: HeightCommand,
  RuddersCommand: RuddersCommand,
  RawMagnetic: RawMagnetic,
  VelocityZCommand: VelocityZCommand,
  RawRC: RawRC,
  RawImu: RawImu,
  Altimeter: Altimeter,
  AttitudeCommand: AttitudeCommand,
};
