#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Project3Stack } from '../lib/project3-stack';

const app = new cdk.App();
new Project3Stack(app, 'Project3Stack');
