#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Project1Stack } from '../lib/project1-stack';

const app = new cdk.App();
new Project1Stack(app, 'Project1Stack');
