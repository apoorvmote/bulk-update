#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Project2Stack } from '../lib/project2-stack';

const app = new cdk.App();
new Project2Stack(app, 'Project2Stack');
