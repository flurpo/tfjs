/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import * as tf from '../index';
import {ALL_ENVS, BROWSER_ENVS, describeWithFlags, NODE_ENVS} from '../jasmine_util';
import {expectArraysClose, expectArraysEqual, expectPromiseToFail} from '../test_util';

describeWithFlags('zeros', ALL_ENVS, () => {
  it('1D default dtype', async () => {
    const a: tf.Tensor1D = tf.zeros([3]);
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3]);
    expectArraysClose(await a.data(), [0, 0, 0]);
  });

  it('1D float32 dtype', async () => {
    const a = tf.zeros([3], 'float32');
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3]);
    expectArraysClose(await a.data(), [0, 0, 0]);
  });

  it('1D int32 dtype', async () => {
    const a = tf.zeros([3], 'int32');
    expect(a.dtype).toBe('int32');
    expect(a.shape).toEqual([3]);
    expectArraysEqual(await a.data(), [0, 0, 0]);
  });

  it('1D bool dtype', async () => {
    const a = tf.zeros([3], 'bool');
    expect(a.dtype).toBe('bool');
    expect(a.shape).toEqual([3]);
    expectArraysEqual(await a.data(), [0, 0, 0]);
  });

  it('2D default dtype', async () => {
    const a = tf.zeros([3, 2]);
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3, 2]);
    expectArraysClose(await a.data(), [0, 0, 0, 0, 0, 0]);
  });

  it('2D float32 dtype', async () => {
    const a = tf.zeros([3, 2], 'float32');
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3, 2]);
    expectArraysClose(await a.data(), [0, 0, 0, 0, 0, 0]);
  });

  it('2D int32 dtype', async () => {
    const a = tf.zeros([3, 2], 'int32');
    expect(a.dtype).toBe('int32');
    expect(a.shape).toEqual([3, 2]);
    expectArraysEqual(await a.data(), [0, 0, 0, 0, 0, 0]);
  });

  it('2D bool dtype', async () => {
    const a = tf.zeros([3, 2], 'bool');
    expect(a.dtype).toBe('bool');
    expect(a.shape).toEqual([3, 2]);
    expectArraysEqual(await a.data(), [0, 0, 0, 0, 0, 0]);
  });

  it('3D default dtype', async () => {
    const a = tf.zeros([2, 2, 2]);
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([2, 2, 2]);
    expectArraysClose(await a.data(), [0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('3D float32 dtype', async () => {
    const a = tf.zeros([2, 2, 2], 'float32');
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([2, 2, 2]);
    expectArraysClose(await a.data(), [0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('3D int32 dtype', async () => {
    const a = tf.zeros([2, 2, 2], 'int32');
    expect(a.dtype).toBe('int32');
    expect(a.shape).toEqual([2, 2, 2]);
    expectArraysEqual(await a.data(), [0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('3D bool dtype', async () => {
    const a = tf.zeros([2, 2, 2], 'bool');
    expect(a.dtype).toBe('bool');
    expect(a.shape).toEqual([2, 2, 2]);
    expectArraysEqual(await a.data(), [0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('4D default dtype', async () => {
    const a = tf.zeros([3, 2, 1, 1]);
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3, 2, 1, 1]);
    expectArraysClose(await a.data(), [0, 0, 0, 0, 0, 0]);
  });

  it('4D float32 dtype', async () => {
    const a = tf.zeros([3, 2, 1, 1], 'float32');
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3, 2, 1, 1]);
    expectArraysClose(await a.data(), [0, 0, 0, 0, 0, 0]);
  });

  it('4D int32 dtype', async () => {
    const a = tf.zeros([3, 2, 1, 1], 'int32');
    expect(a.dtype).toBe('int32');
    expect(a.shape).toEqual([3, 2, 1, 1]);
    expectArraysEqual(await a.data(), [0, 0, 0, 0, 0, 0]);
  });

  it('4D bool dtype', async () => {
    const a = tf.zeros([3, 2, 1, 1], 'bool');
    expect(a.dtype).toBe('bool');
    expect(a.shape).toEqual([3, 2, 1, 1]);
    expectArraysEqual(await a.data(), [0, 0, 0, 0, 0, 0]);
  });
});

describeWithFlags('ones', ALL_ENVS, () => {
  it('1D default dtype', async () => {
    const a = tf.ones([3]);
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3]);
    expectArraysClose(await a.data(), [1, 1, 1]);
  });

  it('1D float32 dtype', async () => {
    const a = tf.ones([3], 'float32');
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3]);
    expectArraysClose(await a.data(), [1, 1, 1]);
  });

  it('1D int32 dtype', async () => {
    const a = tf.ones([3], 'int32');
    expect(a.dtype).toBe('int32');
    expect(a.shape).toEqual([3]);
    expectArraysEqual(await a.data(), [1, 1, 1]);
  });

  it('1D bool dtype', async () => {
    const a = tf.ones([3], 'bool');
    expect(a.dtype).toBe('bool');
    expect(a.shape).toEqual([3]);
    expectArraysEqual(await a.data(), [1, 1, 1]);
  });

  it('2D default dtype', async () => {
    const a = tf.ones([3, 2]);
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3, 2]);
    expectArraysClose(await a.data(), [1, 1, 1, 1, 1, 1]);
  });

  it('2D float32 dtype', async () => {
    const a = tf.ones([3, 2], 'float32');
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3, 2]);
    expectArraysClose(await a.data(), [1, 1, 1, 1, 1, 1]);
  });

  it('2D int32 dtype', async () => {
    const a = tf.ones([3, 2], 'int32');
    expect(a.dtype).toBe('int32');
    expect(a.shape).toEqual([3, 2]);
    expectArraysEqual(await a.data(), [1, 1, 1, 1, 1, 1]);
  });

  it('2D bool dtype', async () => {
    const a = tf.ones([3, 2], 'bool');
    expect(a.dtype).toBe('bool');
    expect(a.shape).toEqual([3, 2]);
    expectArraysEqual(await a.data(), [1, 1, 1, 1, 1, 1]);
  });

  it('3D default dtype', async () => {
    const a = tf.ones([2, 2, 2]);
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([2, 2, 2]);
    expectArraysClose(await a.data(), [1, 1, 1, 1, 1, 1, 1, 1]);
  });

  it('3D float32 dtype', async () => {
    const a = tf.ones([2, 2, 2], 'float32');
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([2, 2, 2]);
    expectArraysClose(await a.data(), [1, 1, 1, 1, 1, 1, 1, 1]);
  });

  it('3D int32 dtype', async () => {
    const a = tf.ones([2, 2, 2], 'int32');
    expect(a.dtype).toBe('int32');
    expect(a.shape).toEqual([2, 2, 2]);
    expectArraysEqual(await a.data(), [1, 1, 1, 1, 1, 1, 1, 1]);
  });

  it('3D bool dtype', async () => {
    const a = tf.ones([2, 2, 2], 'bool');
    expect(a.dtype).toBe('bool');
    expect(a.shape).toEqual([2, 2, 2]);
    expectArraysEqual(await a.data(), [1, 1, 1, 1, 1, 1, 1, 1]);
  });

  it('4D default dtype', async () => {
    const a = tf.ones([3, 2, 1, 1]);
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3, 2, 1, 1]);
    expectArraysClose(await a.data(), [1, 1, 1, 1, 1, 1]);
  });

  it('4D float32 dtype', async () => {
    const a = tf.ones([3, 2, 1, 1], 'float32');
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3, 2, 1, 1]);
    expectArraysClose(await a.data(), [1, 1, 1, 1, 1, 1]);
  });

  it('4D int32 dtype', async () => {
    const a = tf.ones([3, 2, 1, 1], 'int32');
    expect(a.dtype).toBe('int32');
    expect(a.shape).toEqual([3, 2, 1, 1]);
    expectArraysEqual(await a.data(), [1, 1, 1, 1, 1, 1]);
  });

  it('4D bool dtype', async () => {
    const a = tf.ones([3, 2, 1, 1], 'bool');
    expect(a.dtype).toBe('bool');
    expect(a.shape).toEqual([3, 2, 1, 1]);
    expectArraysEqual(await a.data(), [1, 1, 1, 1, 1, 1]);
  });
});

describeWithFlags('zerosLike', ALL_ENVS, () => {
  it('1D default dtype', async () => {
    const a = tf.tensor1d([1, 2, 3]);
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([3]);
    expectArraysClose(await b.data(), [0, 0, 0]);
  });

  it('chainable 1D default dtype', async () => {
    const a = tf.tensor1d([1, 2, 3]);
    const b = a.zerosLike();
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([3]);
    expectArraysClose(await b.data(), [0, 0, 0]);
  });

  it('1D float32 dtype', async () => {
    const a = tf.tensor1d([1, 2, 3], 'float32');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([3]);
    expectArraysClose(await b.data(), [0, 0, 0]);
  });

  it('1D int32 dtype', async () => {
    const a = tf.tensor1d([1, 2, 3], 'int32');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([3]);
    expectArraysEqual(await b.data(), [0, 0, 0]);
  });

  it('1D bool dtype', async () => {
    const a = tf.tensor1d([1, 2, 3], 'bool');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([3]);
    expectArraysEqual(await b.data(), [0, 0, 0]);
  });

  it('2D default dtype', async () => {
    const a = tf.tensor2d([1, 2, 3, 4], [2, 2]);
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2]);
    expectArraysClose(await b.data(), [0, 0, 0, 0]);
  });

  it('2D float32 dtype', async () => {
    const a = tf.tensor2d([1, 2, 3, 4], [2, 2], 'float32');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2]);
    expectArraysClose(await b.data(), [0, 0, 0, 0]);
  });

  it('2D int32 dtype', async () => {
    const a = tf.tensor2d([1, 2, 3, 4], [2, 2], 'int32');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([2, 2]);
    expectArraysEqual(await b.data(), [0, 0, 0, 0]);
  });

  it('2D bool dtype', async () => {
    const a = tf.tensor2d([1, 2, 3, 4], [2, 2], 'bool');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([2, 2]);
    expectArraysEqual(await b.data(), [0, 0, 0, 0]);
  });

  it('3D default dtype', async () => {
    const a = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]);
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysClose(await b.data(), [0, 0, 0, 0]);
  });

  it('3D float32 dtype', async () => {
    const a = tf.tensor3d([1, 2, 3, 4], [2, 2, 1], 'float32');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysClose(await b.data(), [0, 0, 0, 0]);
  });

  it('3D int32 dtype', async () => {
    const a = tf.tensor3d([1, 2, 3, 4], [2, 2, 1], 'int32');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysEqual(await b.data(), [0, 0, 0, 0]);
  });

  it('3D bool dtype', async () => {
    const a = tf.tensor3d([1, 2, 3, 4], [2, 2, 1], 'bool');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysEqual(await b.data(), [0, 0, 0, 0]);
  });

  it('4D default dtype', async () => {
    const a = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1]);
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysClose(await b.data(), [0, 0, 0, 0]);
  });

  it('4D float32 dtype', async () => {
    const a = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1], 'float32');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysClose(await b.data(), [0, 0, 0, 0]);
  });

  it('4D int32 dtype', async () => {
    const a = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1], 'int32');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysEqual(await b.data(), [0, 0, 0, 0]);
  });

  it('4D bool dtype', async () => {
    const a = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1], 'bool');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysEqual(await b.data(), [0, 0, 0, 0]);
  });

  it('4D default dtype', async () => {
    const a = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1]);
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysClose(await b.data(), [0, 0, 0, 0]);
  });

  it('5D float32 dtype', async () => {
    const a = tf.tensor5d([1, 2, 3, 4], [1, 2, 2, 1, 1], 'float32');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([1, 2, 2, 1, 1]);
    expectArraysClose(await b.data(), [0, 0, 0, 0]);
  });

  it('5D int32 dtype', async () => {
    const a = tf.tensor5d([1, 2, 3, 4], [1, 2, 2, 1, 1], 'int32');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([1, 2, 2, 1, 1]);
    expectArraysEqual(await b.data(), [0, 0, 0, 0]);
  });

  it('5D bool dtype', async () => {
    const a = tf.tensor5d([1, 2, 3, 4], [1, 2, 2, 1, 1], 'bool');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([1, 2, 2, 1, 1]);
    expectArraysEqual(await b.data(), [0, 0, 0, 0]);
  });

  it('5D default dtype', async () => {
    const a = tf.tensor5d([1, 2, 3, 4], [1, 2, 2, 1, 1]);
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([1, 2, 2, 1, 1]);
    expectArraysClose(await b.data(), [0, 0, 0, 0]);
  });

  it('6D float32 dtype', async () => {
    const a = tf.tensor6d([1, 2, 3, 4], [1, 2, 2, 1, 1, 1], 'float32');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([1, 2, 2, 1, 1, 1]);
    expectArraysClose(await b.data(), [0, 0, 0, 0]);
  });

  it('6D int32 dtype', async () => {
    const a = tf.tensor6d([1, 2, 3, 4], [1, 2, 2, 1, 1, 1], 'int32');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual(a.shape);
    expectArraysEqual(await b.data(), [0, 0, 0, 0]);
  });

  it('6D bool dtype', async () => {
    const a = tf.tensor6d([1, 2, 3, 4], [1, 2, 2, 1, 1, 1], 'bool');
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual(a.shape);
    expectArraysEqual(await b.data(), [0, 0, 0, 0]);
  });

  it('6D default dtype', async () => {
    const a = tf.tensor6d([1, 2, 3, 4], [1, 2, 2, 1, 1, 1]);
    const b = tf.zerosLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual(a.shape);
    expectArraysClose(await b.data(), [0, 0, 0, 0]);
  });

  it('zerosLike gradient', async () => {
    const x = tf.tensor2d([[0, 1, 2], [4, 5, 6]]);
    const gradients = tf.grad(x => tf.zerosLike(x))(x);
    expect(gradients.shape).toEqual([2, 3]);
    expectArraysEqual(await gradients.data(), [0, 0, 0, 0, 0, 0]);
  });

  it('throws when passed a non-tensor', () => {
    expect(() => tf.zerosLike({} as tf.Tensor))
        .toThrowError(/Argument 'x' passed to 'zerosLike' must be a Tensor/);
  });

  it('accepts a tensor-like object', async () => {
    const res = tf.zerosLike([[1, 2], [3, 4]]);
    expect(res.shape).toEqual([2, 2]);
    expectArraysEqual(await res.data(), [0, 0, 0, 0]);
  });
});

describeWithFlags('onesLike', ALL_ENVS, () => {
  it('1D default dtype', async () => {
    const a = tf.tensor1d([1, 2, 3]);
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([3]);
    expectArraysClose(await b.data(), [1, 1, 1]);
  });

  it('chainable 1D default dtype', async () => {
    const a = tf.tensor1d([1, 2, 3]);
    const b = a.onesLike();
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([3]);
    expectArraysClose(await b.data(), [1, 1, 1]);
  });

  it('1D float32 dtype', async () => {
    const a = tf.tensor1d([1, 2, 3], 'float32');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([3]);
    expectArraysClose(await b.data(), [1, 1, 1]);
  });

  it('1D int32 dtype', async () => {
    const a = tf.tensor1d([1, 2, 3], 'int32');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([3]);
    expectArraysEqual(await b.data(), [1, 1, 1]);
  });

  it('1D bool dtype', async () => {
    const a = tf.tensor1d([1, 2, 3], 'bool');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([3]);
    expectArraysEqual(await b.data(), [1, 1, 1]);
  });

  it('1D complex dtype', async () => {
    const real = tf.tensor1d([1, 2, 3], 'float32');
    const imag = tf.tensor1d([1, 2, 3], 'float32');
    const a = tf.complex(real, imag);
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('complex64');
    expect(b.shape).toEqual([3]);
    expectArraysEqual(await b.data(), [1, 0, 1, 0, 1, 0]);
  });

  it('2D default dtype', async () => {
    const a = tf.tensor2d([1, 2, 3, 4], [2, 2]);
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2]);
    expectArraysClose(await b.data(), [1, 1, 1, 1]);
  });

  it('2D float32 dtype', async () => {
    const a = tf.tensor2d([1, 2, 3, 4], [2, 2], 'float32');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2]);
    expectArraysClose(await b.data(), [1, 1, 1, 1]);
  });

  it('2D int32 dtype', async () => {
    const a = tf.tensor2d([1, 2, 3, 4], [2, 2], 'int32');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([2, 2]);
    expectArraysEqual(await b.data(), [1, 1, 1, 1]);
  });

  it('2D bool dtype', async () => {
    const a = tf.tensor2d([1, 2, 3, 4], [2, 2], 'bool');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([2, 2]);
    expectArraysEqual(await b.data(), [1, 1, 1, 1]);
  });

  it('2D complex dtype', async () => {
    const real = tf.tensor2d([1, 2, 3, 4], [2, 2], 'float32');
    const imag = tf.tensor2d([1, 2, 3, 4], [2, 2], 'float32');
    const a = tf.complex(real, imag);
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('complex64');
    expect(b.shape).toEqual([2, 2]);
    expectArraysEqual(await b.data(), [1, 0, 1, 0, 1, 0, 1, 0]);
  });

  it('3D default dtype', async () => {
    const a = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]);
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysClose(await b.data(), [1, 1, 1, 1]);
  });

  it('3D float32 dtype', async () => {
    const a = tf.tensor3d([1, 2, 3, 4], [2, 2, 1], 'float32');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysClose(await b.data(), [1, 1, 1, 1]);
  });

  it('3D int32 dtype', async () => {
    const a = tf.tensor3d([1, 2, 3, 4], [2, 2, 1], 'int32');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysEqual(await b.data(), [1, 1, 1, 1]);
  });

  it('3D bool dtype', async () => {
    const a = tf.tensor3d([1, 2, 3, 4], [2, 2, 1], 'bool');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysEqual(await b.data(), [1, 1, 1, 1]);
  });

  it('3D complex dtype', async () => {
    const real = tf.tensor3d([1, 2, 3, 4], [2, 2, 1], 'float32');
    const imag = tf.tensor3d([1, 2, 3, 4], [2, 2, 1], 'float32');
    const a = tf.complex(real, imag);
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('complex64');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysEqual(await b.data(), [1, 0, 1, 0, 1, 0, 1, 0]);
  });

  it('4D default dtype', async () => {
    const a = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1]);
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysClose(await b.data(), [1, 1, 1, 1]);
  });

  it('4D float32 dtype', async () => {
    const a = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1], 'float32');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysClose(await b.data(), [1, 1, 1, 1]);
  });

  it('4D int32 dtype', async () => {
    const a = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1], 'int32');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysEqual(await b.data(), [1, 1, 1, 1]);
  });

  it('4D bool dtype', async () => {
    const a = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1], 'bool');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysEqual(await b.data(), [1, 1, 1, 1]);
  });

  it('4D default dtype', async () => {
    const a = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1]);
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysClose(await b.data(), [1, 1, 1, 1]);
  });

  it('4D complex dtype', async () => {
    const real = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1], 'float32');
    const imag = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1], 'float32');
    const a = tf.complex(real, imag);
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('complex64');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysEqual(await b.data(), [1, 0, 1, 0, 1, 0, 1, 0]);
  });

  it('5D float32 dtype', async () => {
    const a = tf.tensor5d([1, 2, 3, 4], [1, 2, 2, 1, 1], 'float32');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([1, 2, 2, 1, 1]);
    expectArraysClose(await b.data(), [1, 1, 1, 1]);
  });

  it('5D int32 dtype', async () => {
    const a = tf.tensor5d([1, 2, 3, 4], [1, 2, 2, 1, 1], 'int32');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([1, 2, 2, 1, 1]);
    expectArraysEqual(await b.data(), [1, 1, 1, 1]);
  });

  it('5D bool dtype', async () => {
    const a = tf.tensor5d([1, 2, 3, 4], [1, 2, 2, 1, 1], 'bool');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([1, 2, 2, 1, 1]);
    expectArraysEqual(await b.data(), [1, 1, 1, 1]);
  });

  it('5D default dtype', async () => {
    const a = tf.tensor5d([1, 2, 3, 4], [1, 2, 2, 1, 1]);
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([1, 2, 2, 1, 1]);
    expectArraysClose(await b.data(), [1, 1, 1, 1]);
  });

  it('5D complex dtype', async () => {
    const real = tf.tensor5d([1, 2, 3, 4], [1, 2, 2, 1, 1], 'float32');
    const imag = tf.tensor5d([1, 2, 3, 4], [1, 2, 2, 1, 1], 'float32');
    const a = tf.complex(real, imag);
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('complex64');
    expect(b.shape).toEqual([1, 2, 2, 1, 1]);
    expectArraysEqual(await b.data(), [1, 0, 1, 0, 1, 0, 1, 0]);
  });

  it('6D int32 dtype', async () => {
    const a = tf.tensor6d([1, 2, 3, 4], [1, 2, 2, 1, 1, 1], 'int32');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual(a.shape);
    expectArraysEqual(await b.data(), [1, 1, 1, 1]);
  });

  it('6D bool dtype', async () => {
    const a = tf.tensor6d([1, 2, 3, 4], [1, 2, 2, 1, 1, 1], 'bool');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual(a.shape);
    expectArraysEqual(await b.data(), [1, 1, 1, 1]);
  });

  it('6D default dtype', async () => {
    const a = tf.tensor6d([1, 2, 3, 4], [1, 2, 2, 1, 1, 1]);
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual(a.shape);
    expectArraysClose(await b.data(), [1, 1, 1, 1]);
  });

  it('6D float32 dtype', async () => {
    const a = tf.tensor6d([1, 2, 3, 4], [1, 2, 2, 1, 1, 1], 'float32');
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual(a.shape);
    expectArraysClose(await b.data(), [1, 1, 1, 1]);
  });

  it('6D complex dtype', async () => {
    const real = tf.tensor6d([1, 2, 3, 4], [1, 2, 2, 1, 1, 1], 'float32');
    const imag = tf.tensor6d([1, 2, 3, 4], [1, 2, 2, 1, 1, 1], 'float32');
    const a = tf.complex(real, imag);
    const b = tf.onesLike(a);
    expect(b.dtype).toBe('complex64');
    expect(b.shape).toEqual([1, 2, 2, 1, 1, 1]);
    expectArraysEqual(await b.data(), [1, 0, 1, 0, 1, 0, 1, 0]);
  });

  it('throws when passed a non-tensor', () => {
    expect(() => tf.onesLike({} as tf.Tensor))
        .toThrowError(/Argument 'x' passed to 'onesLike' must be a Tensor/);
  });

  it('onesLike gradient', async () => {
    const x = tf.tensor2d([[0, 1, 2], [4, 5, 6]]);
    const gradients = tf.grad(x => tf.onesLike(x))(x);
    expect(gradients.shape).toEqual([2, 3]);
    expectArraysEqual(await gradients.data(), [0, 0, 0, 0, 0, 0]);
  });

  it('accepts a tensor-like object', async () => {
    const res = tf.onesLike([[1, 2], [3, 4]]);
    expect(res.shape).toEqual([2, 2]);
    expectArraysEqual(await res.data(), [1, 1, 1, 1]);
  });
});
class MockContext {
  getImageData(x: number, y: number, width: number, height: number) {
    const data = new Uint8ClampedArray(width * height * 4);
    for (let i = 0; i < data.length; ++i) {
      data[i] = i + 1;
    }
    return {data};
  }
}

class MockCanvas {
  constructor(public width: number, public height: number) {}
  getContext(type: '2d'): MockContext {
    return new MockContext();
  }
}

describeWithFlags('fromPixels, mock canvas', NODE_ENVS, () => {
  it('accepts a canvas-like element', async () => {
    const c = new MockCanvas(2, 2);
    // tslint:disable-next-line:no-any
    const t = tf.browser.fromPixels(c as any);
    expect(t.dtype).toBe('int32');
    expect(t.shape).toEqual([2, 2, 3]);
    expectArraysEqual(
        await t.data(), [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15]);
  });

  it('accepts a canvas-like element, numChannels=4', async () => {
    const c = new MockCanvas(2, 2);
    // tslint:disable-next-line:no-any
    const t = tf.browser.fromPixels(c as any, 4);
    expect(t.dtype).toBe('int32');
    expect(t.shape).toEqual([2, 2, 4]);
    expectArraysEqual(
        await t.data(),
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  });

  it('errors when passed a non-canvas object', () => {
    // tslint:disable-next-line:no-any
    expect(() => tf.browser.fromPixels(5 as any)).toThrowError();
  });
});

describeWithFlags('fromPixels', BROWSER_ENVS, () => {
  it('ImageData 1x1x3', async () => {
    const pixels = new ImageData(1, 1);
    pixels.data[0] = 0;
    pixels.data[1] = 80;
    pixels.data[2] = 160;
    pixels.data[3] = 240;

    const array = tf.browser.fromPixels(pixels, 3);

    expectArraysEqual(await array.data(), [0, 80, 160]);
  });

  it('ImageData 1x1x4', async () => {
    const pixels = new ImageData(1, 1);
    pixels.data[0] = 0;
    pixels.data[1] = 80;
    pixels.data[2] = 160;
    pixels.data[3] = 240;

    const array = tf.browser.fromPixels(pixels, 4);

    expectArraysEqual(await array.data(), [0, 80, 160, 240]);
  });

  it('ImageData 2x2x3', async () => {
    const pixels = new ImageData(2, 2);

    for (let i = 0; i < 8; i++) {
      pixels.data[i] = i * 2;
    }
    for (let i = 8; i < 16; i++) {
      pixels.data[i] = i * 2;
    }

    const array = tf.browser.fromPixels(pixels, 3);

    expectArraysEqual(
        await array.data(), [0, 2, 4, 8, 10, 12, 16, 18, 20, 24, 26, 28]);
  });

  it('ImageData 2x2x4', async () => {
    const pixels = new ImageData(2, 2);
    for (let i = 0; i < 8; i++) {
      pixels.data[i] = i * 2;
    }
    for (let i = 8; i < 16; i++) {
      pixels.data[i] = i * 2;
    }

    const array = tf.browser.fromPixels(pixels, 4);

    expectArraysClose(
        await array.data(),
        new Int32Array(
            [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]));
  });

  it('fromPixels, 3 channels', async () => {
    const pixels = new ImageData(1, 2);
    pixels.data[0] = 2;
    pixels.data[1] = 3;
    pixels.data[2] = 4;
    pixels.data[3] = 255;  // Not used.
    pixels.data[4] = 5;
    pixels.data[5] = 6;
    pixels.data[6] = 7;
    pixels.data[7] = 255;  // Not used.
    const res = tf.browser.fromPixels(pixels, 3);
    expect(res.shape).toEqual([2, 1, 3]);
    expect(res.dtype).toBe('int32');
    expectArraysClose(await res.data(), [2, 3, 4, 5, 6, 7]);
  });

  it('fromPixels, reshape, then do tf.add()', async () => {
    const pixels = new ImageData(1, 1);
    pixels.data[0] = 2;
    pixels.data[1] = 3;
    pixels.data[2] = 4;
    pixels.data[3] = 255;  // Not used.
    const a = tf.browser.fromPixels(pixels, 3).reshape([1, 1, 1, 3]);
    const res = a.add(tf.scalar(2, 'int32'));
    expect(res.shape).toEqual([1, 1, 1, 3]);
    expect(res.dtype).toBe('int32');
    expectArraysClose(await res.data(), [4, 5, 6]);
  });

  it('fromPixels + fromPixels', async () => {
    const pixelsA = new ImageData(1, 1);
    pixelsA.data[0] = 255;
    pixelsA.data[1] = 3;
    pixelsA.data[2] = 4;
    pixelsA.data[3] = 255;  // Not used.
    const pixelsB = new ImageData(1, 1);
    pixelsB.data[0] = 5;
    pixelsB.data[1] = 6;
    pixelsB.data[2] = 7;
    pixelsB.data[3] = 255;  // Not used.
    const a = tf.browser.fromPixels(pixelsA, 3).toFloat();
    const b = tf.browser.fromPixels(pixelsB, 3).toFloat();
    const res = a.add(b);
    expect(res.shape).toEqual([1, 1, 3]);
    expect(res.dtype).toBe('float32');
    expectArraysClose(await res.data(), [260, 9, 11]);
  });
  it('fromPixels for PixelData type', async () => {
    const dataA = new Uint8Array([255, 3, 4, 255]);
    const pixelsA = {width: 1, height: 1, data: dataA};

    const dataB = new Uint8Array([5, 6, 7, 255]);
    const pixelsB = {width: 1, height: 1, data: dataB};
    const a = tf.browser.fromPixels(pixelsA, 3).toFloat();
    const b = tf.browser.fromPixels(pixelsB, 3).toFloat();
    const res = a.add(b);
    expect(res.shape).toEqual([1, 1, 3]);
    expect(res.dtype).toBe('float32');
    expectArraysClose(await res.data(), [260, 9, 11]);
  });

  it('fromPixels for HTMLCanvasElement', async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');
    const pixels = new ImageData(1, 1);
    pixels.data[0] = 0;
    pixels.data[1] = 80;
    pixels.data[2] = 160;
    pixels.data[3] = 240;
    ctx.putImageData(pixels, 1, 1);
    const res = tf.browser.fromPixels(canvas);
    expect(res.shape).toEqual([1, 1, 3]);
    const data = await res.data();
    expect(data.length).toEqual(1 * 1 * 3);
  });
  it('fromPixels for HTMLImageElement', async () => {
    const img = new Image(10, 10);
    img.src = 'data:image/gif;base64' +
        ',R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
    const res = tf.browser.fromPixels(img);
    expect(res.shape).toEqual([10, 10, 3]);
    const data = await res.data();
    expect(data.length).toEqual(10 * 10 * 3);
  });
  it('fromPixels for HTMLVideolement', async () => {
    const video = document.createElement('video');
    video.autoplay = true;
    const source = document.createElement('source');
    // tslint:disable:max-line-length
    source.src =
        'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAu1tZGF0AAACrQYF//+p3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE1NSByMjkwMSA3ZDBmZjIyIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxOCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTMgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz1jcmYgbWJ0cmVlPTEgY3JmPTI4LjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAAwZYiEAD//8m+P5OXfBeLGOfKE3xkODvFZuBflHv/+VwJIta6cbpIo4ABLoKBaYTkTAAAC7m1vb3YAAABsbXZoZAAAAAAAAAAAAAAAAAAAA+gAAAPoAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIYdHJhawAAAFx0a2hkAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAPoAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAACgAAAAWgAAAAAAJGVkdHMAAAAcZWxzdAAAAAAAAAABAAAD6AAAAAAAAQAAAAABkG1kaWEAAAAgbWRoZAAAAAAAAAAAAAAAAAAAQAAAAEAAVcQAAAAAAC1oZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAVmlkZW9IYW5kbGVyAAAAATttaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAD7c3RibAAAAJdzdHNkAAAAAAAAAAEAAACHYXZjMQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAACgAFoASAAAAEgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj//wAAADFhdmNDAWQACv/hABhnZAAKrNlCjfkhAAADAAEAAAMAAg8SJZYBAAZo6+JLIsAAAAAYc3R0cwAAAAAAAAABAAAAAQAAQAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAEAAAABAAAAFHN0c3oAAAAAAAAC5QAAAAEAAAAUc3RjbwAAAAAAAAABAAAAMAAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTguMTIuMTAw';
    source.type = 'video/mp4';
    video.appendChild(source);
    document.body.appendChild(video);

    // On mobile safari the ready state is ready immediately so we
    if (video.readyState < 2) {
      await new Promise(resolve => {
        video.addEventListener('loadeddata', () => resolve());
      });
    }

    const res = tf.browser.fromPixels(video);
    expect(res.shape).toEqual([90, 160, 3]);
    const data = await res.data();
    expect(data.length).toEqual(90 * 160 * 3);
    document.body.removeChild(video);
  });

  it('fromPixels for HTMLVideolement throws without loadeddata', async () => {
    const video = document.createElement('video');
    video.width = 1;
    video.height = 1;
    video.src = 'data:image/gif;base64' +
        ',R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
    expect(() => tf.browser.fromPixels(video)).toThrowError();
  });

  it('throws when passed a primitive number', () => {
    const msg = /pixels passed to tf.browser.fromPixels\(\) must be either/;
    // tslint:disable-next-line:no-any
    expect(() => tf.browser.fromPixels(3 as any)).toThrowError(msg);
  });

  it('throws when passed a string', () => {
    const msg = /pixels passed to tf.browser.fromPixels\(\) must be either/;
    // tslint:disable-next-line:no-any
    expect(() => tf.browser.fromPixels('test' as any)).toThrowError(msg);
  });

  it('canvas and image match', async () => {
    const img = new Image();
    const size = 80;
    // tslint:disable:max-line-length
    img.src =
        'data:image/jpeg;base64,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';
    // tslint:enable:max-line-length

    await new Promise(resolve => {
      img.onload = () => resolve(img);
    });

    img.width = size;
    img.height = size;

    const pixels = await tf.browser.fromPixels(img, 4);

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, size, size);
    const actual = ctx.getImageData(0, 0, size, size).data;
    const actualInt32 = Int32Array.from(actual);
    const pixelsData = await pixels.data();

    expectArraysClose(pixelsData, actualInt32, 10);
  });
});

describeWithFlags('toPixels no canvas', ALL_ENVS, () => {
  it('draws a rank-2 float32 tensor', async () => {
    const x = tf.tensor2d([.15, .2], [2, 1], 'float32');

    const data = await tf.browser.toPixels(x);
    const expected = new Uint8ClampedArray([
      Math.round(.15 * 255), Math.round(.15 * 255), Math.round(.15 * 255), 255,
      Math.round(.2 * 255), Math.round(.2 * 255), Math.round(.2 * 255), 255
    ]);
    expect(data).toEqual(expected);
  });

  it('draws a rank-2 int32 tensor', async () => {
    const x = tf.tensor2d([10, 20], [2, 1], 'int32');
    const data = await tf.browser.toPixels(x);
    const expected = new Uint8ClampedArray([10, 10, 10, 255, 20, 20, 20, 255]);
    expect(data).toEqual(expected);
  });

  it('draws a rank-3 float32 tensor, 1 channel', async () => {
    const x = tf.tensor3d([.15, .2], [2, 1, 1], 'float32');

    const data = await tf.browser.toPixels(x);
    const expected = new Uint8ClampedArray([
      Math.round(.15 * 255), Math.round(.15 * 255), Math.round(.15 * 255), 255,
      Math.round(.2 * 255), Math.round(.2 * 255), Math.round(.2 * 255), 255
    ]);
    expect(data).toEqual(expected);
  });

  it('draws a rank-3 int32 tensor, 1 channel', async () => {
    const x = tf.tensor3d([10, 20], [2, 1, 1], 'int32');

    const data = await tf.browser.toPixels(x);
    const expected = new Uint8ClampedArray([10, 10, 10, 255, 20, 20, 20, 255]);
    expect(data).toEqual(expected);
  });

  it('draws a rank-3 float32 tensor, 3 channel', async () => {
    // 0.1 and 0.3 are changed to 0.1001 and 0.3001 to avoid boundary conditions
    // such as Math.round(~25.5) which on Mobile Safari gives 25 and Desktop
    // gives 26.
    const x =
        tf.tensor3d([.05, .1001, .15, .2, .25, .3001], [2, 1, 3], 'float32');

    const data = await tf.browser.toPixels(x);
    const expected = new Uint8ClampedArray([
      Math.round(.05 * 255), Math.round(.1001 * 255), Math.round(.15 * 255),
      255, Math.round(.2 * 255), Math.round(.25 * 255), Math.round(.3001 * 255),
      255
    ]);
    expect(data).toEqual(expected);
  });

  it('draws a rank-3 int32 tensor, 3 channel', async () => {
    const x = tf.tensor3d([10, 20, 30, 40, 50, 60], [2, 1, 3], 'int32');

    const data = await tf.browser.toPixels(x);
    const expected = new Uint8ClampedArray([10, 20, 30, 255, 40, 50, 60, 255]);
    expect(data).toEqual(expected);
  });

  it('draws a rank-3 float32 tensor, 4 channel', async () => {
    const x = tf.tensor3d(
        [.05, .1001, .15, .2, .25, .3001, .35, .4], [2, 1, 4], 'float32');

    const data = await tf.browser.toPixels(x);
    const expected = new Uint8ClampedArray([
      Math.round(.05 * 255), Math.round(.1001 * 255), Math.round(.15 * 255),
      Math.round(.20 * 255), Math.round(.25 * 255), Math.round(.3001 * 255),
      Math.round(.35 * 255), Math.round(.4 * 255)
    ]);
    expect(data).toEqual(expected);
  });

  it('draws a rank-3 int32 tensor, 4 channel', async () => {
    const x = tf.tensor3d([10, 20, 30, 40, 50, 60, 70, 80], [2, 1, 4], 'int32');

    const data = await tf.browser.toPixels(x);
    const expected = new Uint8ClampedArray([10, 20, 30, 40, 50, 60, 70, 80]);
    expect(data).toEqual(expected);
  });

  it('throws for scalars', done => {
    // tslint:disable-next-line:no-any
    expectPromiseToFail(() => tf.browser.toPixels(tf.scalar(1) as any), done);
  });

  it('throws for rank-1 tensors', done => {
    expectPromiseToFail(
        // tslint:disable-next-line:no-any
        () => tf.browser.toPixels(tf.tensor1d([1]) as any), done);
  });
  it('throws for rank-4 tensors', done => {
    expectPromiseToFail(
        // tslint:disable-next-line:no-any
        () => tf.browser.toPixels(tf.tensor4d([1], [1, 1, 1, 1]) as any), done);
  });
  it('throws for bool dtype', done => {
    expectPromiseToFail(
        () => tf.browser.toPixels(tf.tensor2d([1], [1, 1], 'bool')), done);
  });
  it('throws for rank-3 depth = 2', done => {
    expectPromiseToFail(
        () => tf.browser.toPixels(tf.tensor3d([1, 2], [1, 1, 2])), done);
  });
  it('throws for rank-3 depth = 5', done => {
    expectPromiseToFail(
        () => tf.browser.toPixels(tf.tensor3d([1, 2, 3, 4, 5], [1, 1, 5])),
        done);
  });
  it('throws for float32 tensor with values not in [0 - 1]', done => {
    expectPromiseToFail(
        () => tf.browser.toPixels(tf.tensor2d([-1, .5], [1, 2])), done);
  });
  it('throws for int32 tensor with values not in [0 - 255]', done => {
    expectPromiseToFail(
        () => tf.browser.toPixels(tf.tensor2d([-1, 100], [1, 2], 'int32')),
        done);
  });
  it('throws when passed a non-tensor', done => {
    // tslint:disable-next-line:no-any
    expectPromiseToFail(() => tf.browser.toPixels({} as any), done);
  });

  it('accepts a tensor-like object', async () => {
    const x = [[10], [20]];  // 2x1;
    const data = await tf.browser.toPixels(x);

    const expected = new Uint8ClampedArray([10, 10, 10, 255, 20, 20, 20, 255]);
    expect(data).toEqual(expected);
  });

  it('does not leak memory', async () => {
    const x = tf.tensor2d([[.1], [.2]], [2, 1]);
    const startNumTensors = tf.memory().numTensors;
    await tf.browser.toPixels(x);
    expect(tf.memory().numTensors).toEqual(startNumTensors);
  });

  it('does not leak memory given a tensor-like object', async () => {
    const x = [[10], [20]];  // 2x1;
    const startNumTensors = tf.memory().numTensors;
    await tf.browser.toPixels(x);
    expect(tf.memory().numTensors).toEqual(startNumTensors);
  });
});

describeWithFlags('clone', ALL_ENVS, () => {
  it('1D default dtype', async () => {
    const a = tf.tensor1d([1, 2, 3]);
    const b = tf.clone(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([3]);
    expectArraysClose(await b.data(), [1, 2, 3]);
  });

  it('1D float32 dtype', async () => {
    const a = tf.tensor1d([1, 2, 3], 'float32');
    const b = tf.clone(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([3]);
    expectArraysClose(await b.data(), [1, 2, 3]);
  });

  it('1D int32 dtype', async () => {
    const a = tf.tensor1d([1, 2, 3], 'int32');
    const b = tf.clone(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([3]);
    expectArraysEqual(await b.data(), [1, 2, 3]);
  });

  it('1D bool dtype', async () => {
    const a = tf.tensor1d([1, 1, 0], 'bool');
    const b = tf.clone(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([3]);
    expectArraysEqual(await b.data(), [1, 1, 0]);
  });

  it('1D complex64 dtype', async () => {
    const a = tf.complex([1], [1]);
    const b = tf.clone(a);
    expect(b.dtype).toBe('complex64');
    expect(b.shape).toEqual([1]);
    expectArraysEqual(await b.data(), [1, 1]);
  });

  it('1D string dtype', async () => {
    const a = tf.tensor1d(['a', 'b', 'c'], 'string');
    const b = tf.clone(a);
    expect(b.dtype).toBe('string');
    expect(b.shape).toEqual([3]);
    expectArraysEqual(await b.data(), ['a', 'b', 'c']);
  });

  it('2D default dtype', async () => {
    const a = tf.tensor2d([1, 2, 3, 4], [2, 2]);
    const b = tf.clone(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2]);
    expectArraysClose(await b.data(), [1, 2, 3, 4]);
  });

  it('2D float32 dtype', async () => {
    const a = tf.tensor2d([1, 2, 3, 4], [2, 2], 'float32');
    const b = tf.clone(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2]);
    expectArraysClose(await b.data(), [1, 2, 3, 4]);
  });

  it('2D int32 dtype', async () => {
    const a = tf.tensor2d([1, 2, 3, 4], [2, 2], 'int32');
    const b = tf.clone(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([2, 2]);
    expectArraysEqual(await b.data(), [1, 2, 3, 4]);
  });

  it('2D bool dtype', async () => {
    const a = tf.tensor2d([1, 1, 1, 0], [2, 2], 'bool');
    const b = tf.clone(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([2, 2]);
    expectArraysEqual(await b.data(), [1, 1, 1, 0]);
  });

  it('2D complex64 dtype', async () => {
    const a = tf.complex([[1, 3], [5, 7]], [[2, 4], [6, 8]]);
    const b = tf.clone(a);
    expect(b.dtype).toBe('complex64');
    expect(b.shape).toEqual([2, 2]);
    expectArraysEqual(await b.data(), [1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('2D string dtype', async () => {
    const a = tf.tensor2d(['a', 'b', 'c', 'd'], [2, 2], 'string');
    const b = tf.clone(a);
    expect(b.dtype).toBe('string');
    expect(b.shape).toEqual([2, 2]);
    expectArraysEqual(await b.data(), ['a', 'b', 'c', 'd']);
  });

  it('3D default dtype', async () => {
    const a = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]);
    const b = tf.clone(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysClose(await b.data(), [1, 2, 3, 4]);
  });

  it('3D float32 dtype', async () => {
    const a = tf.tensor3d([1, 2, 3, 4], [2, 2, 1], 'float32');
    const b = tf.clone(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysClose(await b.data(), [1, 2, 3, 4]);
  });

  it('3D int32 dtype', async () => {
    const a = tf.tensor3d([1, 2, 3, 4], [2, 2, 1], 'int32');
    const b = tf.clone(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysEqual(await b.data(), [1, 2, 3, 4]);
  });

  it('3D bool dtype', async () => {
    const a = tf.tensor3d([1, 1, 1, 0], [2, 2, 1], 'bool');
    const b = tf.clone(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysEqual(await b.data(), [1, 1, 1, 0]);
  });

  it('3D complex64 dtype', async () => {
    const a = tf.complex([[[1], [3]], [[5], [7]]], [[[2], [4]], [[6], [8]]]);
    const b = tf.clone(a);
    expect(b.dtype).toBe('complex64');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysEqual(await b.data(), [1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('3D string dtype', async () => {
    const a = tf.tensor3d(['a', 'b', 'c', 'd'], [2, 2, 1], 'string');
    const b = tf.clone(a);
    expect(b.dtype).toBe('string');
    expect(b.shape).toEqual([2, 2, 1]);
    expectArraysEqual(await b.data(), ['a', 'b', 'c', 'd']);
  });

  it('4D default dtype', async () => {
    const a = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1]);
    const b = tf.clone(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysClose(await b.data(), [1, 2, 3, 4]);
  });

  it('4D float32 dtype', async () => {
    const a = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1], 'float32');
    const b = tf.clone(a);
    expect(b.dtype).toBe('float32');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysClose(await b.data(), [1, 2, 3, 4]);
  });

  it('4D int32 dtype', async () => {
    const a = tf.tensor4d([1, 2, 3, 4], [2, 2, 1, 1], 'int32');
    const b = tf.clone(a);
    expect(b.dtype).toBe('int32');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysEqual(await b.data(), [1, 2, 3, 4]);
  });

  it('4D bool dtype', async () => {
    const a = tf.tensor4d([1, 1, 1, 0], [2, 2, 1, 1], 'bool');
    const b = tf.clone(a);
    expect(b.dtype).toBe('bool');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysEqual(await b.data(), [1, 1, 1, 0]);
  });

  it('4D complex64 dtype', async () => {
    const a = tf.complex(
        [[[[1]], [[3]]], [[[5]], [[7]]]], [[[[2]], [[4]]], [[[6]], [[8]]]]);
    const b = tf.clone(a);
    expect(b.dtype).toBe('complex64');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysEqual(await b.data(), [1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('4D string dtype', async () => {
    const a = tf.tensor4d(['a', 'b', 'c', 'd'], [2, 2, 1, 1], 'string');
    const b = tf.clone(a);
    expect(b.dtype).toBe('string');
    expect(b.shape).toEqual([2, 2, 1, 1]);
    expectArraysEqual(await b.data(), ['a', 'b', 'c', 'd']);
  });

  it('gradient: 1D', async () => {
    const a = tf.tensor1d([1, 2, 3]);
    const dy = tf.tensor1d([4, 5, 6]);
    const da = tf.grad(x => tf.clone(x))(a, dy);

    expect(da.dtype).toBe('float32');
    expect(da.shape).toEqual([3]);
    expectArraysClose(await da.data(), [4, 5, 6]);
  });

  it('gradient with clones', async () => {
    const a = tf.tensor1d([1, 2, 3]);
    const dy = tf.tensor1d([4, 5, 6]);
    const da = tf.grad(x => tf.clone(x.clone()).clone())(a, dy);

    expect(da.dtype).toBe('float32');
    expect(da.shape).toEqual([3]);
    expectArraysClose(await da.data(), [4, 5, 6]);
  });

  it('gradient: 1D string throws error with string dy', () => {
    const a = tf.tensor1d(['a', 'b', 'c'], 'string');
    const dy = tf.tensor1d(['d', 'e', 'f']);
    expect(() => tf.grad(x => tf.clone(x))(a, dy)).toThrowError();
  });

  it('gradient: 1D string throws error with bool dy', () => {
    const a = tf.tensor1d(['a', 'b', 'c'], 'string');
    const dy = tf.tensor1d([false, true, false], 'bool');
    expect(() => tf.grad(x => tf.clone(x))(a, dy)).toThrowError();
  });

  it('gradient: 1D string throws error with int32 dy', () => {
    const a = tf.tensor1d(['a', 'b', 'c'], 'string');
    const dy = tf.tensor1d([4, 5, 6], 'int32');
    expect(() => tf.grad(x => tf.clone(x))(a, dy)).toThrowError();
  });

  it('gradient: 1D string works with float32 dy', async () => {
    const a = tf.tensor1d(['a', 'b', 'c'], 'string');
    const dy = tf.tensor1d([4, 5, 6]);
    const da = tf.grad(x => tf.clone(x))(a, dy);

    expect(da.dtype).toBe('float32');
    expect(da.shape).toEqual([3]);
    expectArraysClose(await da.data(), [4, 5, 6]);
  });

  it('gradient: 2D int32', async () => {
    const a = tf.tensor2d([1, 2, 3, 4], [2, 2], 'int32');
    const dy = tf.tensor2d([5, 6, 7, 8], [2, 2], 'float32');
    const da = tf.grad(x => tf.clone(x))(a, dy);

    expect(da.dtype).toBe('float32');
    expect(da.shape).toEqual([2, 2]);
    expectArraysEqual(await da.data(), [5, 6, 7, 8]);
  });

  it('gradient: 4D bool', async () => {
    const a = tf.tensor4d([1, 1, 1, 0], [2, 2, 1, 1], 'bool');
    const dy = tf.tensor4d([5, 6, 7, 8], [2, 2, 1, 1], 'float32');
    const da = tf.grad(x => tf.clone(x))(a, dy);

    expect(da.dtype).toBe('float32');
    expect(da.shape).toEqual([2, 2, 1, 1]);
    expectArraysEqual(await da.data(), [5, 6, 7, 8]);
  });

  it('throws when passed a non-tensor', () => {
    expect(() => tf.clone({} as tf.Tensor))
        .toThrowError(/Argument 'x' passed to 'clone' must be a Tensor/);
  });
});

describeWithFlags('linspace', ALL_ENVS, () => {
  it('start stop', async () => {
    const a = tf.linspace(1, 10, 10);
    expectArraysEqual(
        await a.data(), [1., 2., 3., 4., 5., 6., 7., 8., 9., 10.]);
    expect(a.shape).toEqual([10]);

    const b = tf.linspace(12, 17, 8);
    expectArraysClose(await b.data(), [
      12., 12.71428571, 13.42857143, 14.14285714, 14.85714286, 15.57142857,
      16.28571429, 17.
    ]);
    expect(b.shape).toEqual([8]);

    const c = tf.linspace(9, 0, 6);
    expectArraysClose(await c.data(), [9., 7.2, 5.4, 3.6, 1.8, 0.]);
    expect(c.shape).toEqual([6]);
  });

  it('negative start stop', async () => {
    const a = tf.linspace(-4, 5, 6);
    expectArraysClose(await a.data(), [-4., -2.2, -0.4, 1.4, 3.2, 5.]);
    expect(a.shape).toEqual([6]);
  });

  it('start negative stop', async () => {
    const a = tf.linspace(4, -5, 6);
    expectArraysClose(await a.data(), [4., 2.2, 0.4, -1.4, -3.2, -5.]);
    expect(a.shape).toEqual([6]);
  });

  it('negative start negative stop', async () => {
    const a = tf.linspace(-4, -5, 6);
    expectArraysClose(await a.data(), [-4., -4.2, -4.4, -4.6, -4.8, -5.]);
    expect(a.shape).toEqual([6]);

    const b = tf.linspace(-9, -4, 5);
    expectArraysClose(await b.data(), [-9., -7.75, -6.5, -5.25, -4.]);
    expect(b.shape).toEqual([5]);
  });

  it('should throw with no samples', () => {
    expect(() => tf.linspace(2, 10, 0)).toThrow();
  });
});

describeWithFlags('range', ALL_ENVS, () => {
  it('start stop', async () => {
    const a = tf.range(0, 3);
    expectArraysEqual(await a.data(), [0, 1, 2]);
    expect(a.shape).toEqual([3]);

    const b = tf.range(3, 8);
    expectArraysEqual(await b.data(), [3, 4, 5, 6, 7]);
    expect(b.shape).toEqual([5]);
  });

  it('start stop negative', async () => {
    const a = tf.range(-2, 3);
    expectArraysEqual(await a.data(), [-2, -1, 0, 1, 2]);
    expect(a.shape).toEqual([5]);

    const b = tf.range(4, -2);
    expectArraysEqual(await b.data(), [4, 3, 2, 1, 0, -1]);
    expect(b.shape).toEqual([6]);
  });

  it('start stop step', async () => {
    const a = tf.range(4, 15, 4);
    expectArraysEqual(await a.data(), [4, 8, 12]);
    expect(a.shape).toEqual([3]);

    const b = tf.range(4, 11, 4);
    expectArraysEqual(await b.data(), [4, 8]);
    expect(b.shape).toEqual([2]);

    const c = tf.range(4, 17, 4);
    expectArraysEqual(await c.data(), [4, 8, 12, 16]);
    expect(c.shape).toEqual([4]);

    const d = tf.range(0, 30, 5);
    expectArraysEqual(await d.data(), [0, 5, 10, 15, 20, 25]);
    expect(d.shape).toEqual([6]);

    const e = tf.range(-3, 9, 2);
    expectArraysEqual(await e.data(), [-3, -1, 1, 3, 5, 7]);
    expect(e.shape).toEqual([6]);

    const f = tf.range(3, 3);
    expectArraysEqual(await f.data(), new Float32Array(0));
    expect(f.shape).toEqual([0]);

    const g = tf.range(3, 3, 1);
    expectArraysEqual(await g.data(), new Float32Array(0));
    expect(g.shape).toEqual([0]);

    const h = tf.range(3, 3, 4);
    expectArraysEqual(await h.data(), new Float32Array(0));
    expect(h.shape).toEqual([0]);

    const i = tf.range(-18, -2, 5);
    expectArraysEqual(await i.data(), [-18, -13, -8, -3]);
    expect(i.shape).toEqual([4]);
  });

  it('start stop large step', async () => {
    const a = tf.range(3, 10, 150);
    expectArraysEqual(await a.data(), [3]);
    expect(a.shape).toEqual([1]);

    const b = tf.range(10, 500, 205);
    expectArraysEqual(await b.data(), [10, 215, 420]);
    expect(b.shape).toEqual([3]);

    const c = tf.range(3, -10, -150);
    expectArraysEqual(await c.data(), [3]);
    expect(c.shape).toEqual([1]);

    const d = tf.range(-10, -500, -205);
    expectArraysEqual(await d.data(), [-10, -215, -420]);
    expect(d.shape).toEqual([3]);
  });

  it('start stop negative step', async () => {
    const a = tf.range(0, -10, -1);
    expectArraysEqual(await a.data(), [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]);
    expect(a.shape).toEqual([10]);

    const b = tf.range(0, -10);
    expectArraysEqual(await b.data(), [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]);
    expect(b.shape).toEqual([10]);

    const c = tf.range(3, -4, -2);
    expectArraysEqual(await c.data(), [3, 1, -1, -3]);
    expect(c.shape).toEqual([4]);

    const d = tf.range(-3, -18, -5);
    expectArraysEqual(await d.data(), [-3, -8, -13]);
    expect(d.shape).toEqual([3]);
  });

  it('start stop incompatible step', async () => {
    const a = tf.range(3, 10, -2);
    expectArraysEqual(await a.data(), new Float32Array(0));
    expect(a.shape).toEqual([0]);

    const b = tf.range(40, 3, 2);
    expectArraysEqual(await b.data(), new Float32Array(0));
    expect(b.shape).toEqual([0]);
  });

  it('zero step', () => {
    expect(() => tf.range(2, 10, 0)).toThrow();
  });

  it('should have default dtype', async () => {
    const a = tf.range(1, 4);
    expectArraysEqual(await a.data(), [1, 2, 3]);
    expect(a.dtype).toEqual('float32');
    expect(a.shape).toEqual([3]);
  });

  it('should have float32 dtype', async () => {
    const a = tf.range(1, 4, undefined, 'float32');
    expectArraysEqual(await a.data(), [1, 2, 3]);
    expect(a.dtype).toEqual('float32');
    expect(a.shape).toEqual([3]);
  });

  it('should have int32 dtype', async () => {
    const a = tf.range(1, 4, undefined, 'int32');
    expectArraysEqual(await a.data(), [1, 2, 3]);
    expect(a.dtype).toEqual('int32');
    expect(a.shape).toEqual([3]);
  });
});

describeWithFlags('fill', ALL_ENVS, () => {
  it('1D fill', async () => {
    const a = tf.fill([3], 2);
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3]);
    expectArraysClose(await a.data(), [2, 2, 2]);
  });

  it('1D fill string', async () => {
    const a = tf.fill([3], 'aa');
    expect(a.dtype).toBe('string');
    expect(a.shape).toEqual([3]);
    expectArraysEqual(await a.data(), ['aa', 'aa', 'aa']);
  });

  it('2D fill', async () => {
    const a = tf.fill([3, 2], 2);
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3, 2]);
    expectArraysClose(await a.data(), [2, 2, 2, 2, 2, 2]);
  });

  it('2D fill string', async () => {
    const a = tf.fill([3, 2], 'a');
    expect(a.dtype).toBe('string');
    expect(a.shape).toEqual([3, 2]);
    expectArraysEqual(await a.data(), ['a', 'a', 'a', 'a', 'a', 'a']);
  });

  it('3D fill', async () => {
    const a = tf.fill([3, 2, 1], 2);
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3, 2, 1]);
    expectArraysClose(await a.data(), [2, 2, 2, 2, 2, 2]);
  });

  it('4D fill', async () => {
    const a = tf.fill([3, 2, 1, 2], 2);
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([3, 2, 1, 2]);
    expectArraysClose(await a.data(), [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
  });

  it('5D fill', async () => {
    const a = tf.fill([2, 1, 2, 1, 2], 2);
    expect(a.dtype).toBe('float32');
    expect(a.shape).toEqual([2, 1, 2, 1, 2]);
    expectArraysClose(await a.data(), [2, 2, 2, 2, 2, 2, 2, 2]);
  });
});

describeWithFlags('split', ALL_ENVS, () => {
  it('split by number', async () => {
    const x = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
    const res = tf.split(x, 2, 1);
    expect(res.length).toEqual(2);
    expect(res[0].shape).toEqual([2, 2]);
    expectArraysClose(await res[0].data(), [1, 2, 5, 6]);
    expect(res[1].shape).toEqual([2, 2]);
    expectArraysClose(await res[1].data(), [3, 4, 7, 8]);
  });

  it('split by sizes', async () => {
    const x = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
    const res = tf.split(x, [1, 2, 1], 1);
    expect(res.length).toEqual(3);
    expect(res[0].shape).toEqual([2, 1]);
    expectArraysClose(await res[0].data(), [1, 5]);
    expect(res[1].shape).toEqual([2, 2]);
    expectArraysClose(await res[1].data(), [2, 3, 6, 7]);
    expect(res[2].shape).toEqual([2, 1]);
    expectArraysClose(await res[2].data(), [4, 8]);
  });

  it('chainable split by sizes', async () => {
    const x = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
    const res = x.split([1, 2, 1], 1);

    expect(res.length).toEqual(3);
    expect(res[0].shape).toEqual([2, 1]);
    expectArraysClose(await res[0].data(), [1, 5]);
    expect(res[1].shape).toEqual([2, 2]);
    expectArraysClose(await res[1].data(), [2, 3, 6, 7]);
    expect(res[2].shape).toEqual([2, 1]);
    expectArraysClose(await res[2].data(), [4, 8]);
  });

  it('sizes to not sum to axis size throws error', () => {
    const x = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
    const f = () => tf.split(x, [1, 2], 1);
    expect(f).toThrowError();
  });

  it('number of splits does not evenly divide axis', () => {
    const x = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
    const f = () => tf.split(x, 3, 1);
    expect(f).toThrowError();
  });

  it('can split a zero-sized tensor, axis=0', async () => {
    const a = tf.zeros([4, 0]);
    const numSplits = 4;
    const axis = 0;
    const res = tf.split(a, numSplits, axis);
    expect(res.length).toBe(4);
    expect(res[0].shape).toEqual([1, 0]);
    expect(res[1].shape).toEqual([1, 0]);
    expect(res[2].shape).toEqual([1, 0]);
    expect(res[3].shape).toEqual([1, 0]);
    expectArraysClose(await res[0].data(), []);
    expectArraysClose(await res[1].data(), []);
    expectArraysClose(await res[2].data(), []);
    expectArraysClose(await res[3].data(), []);
  });

  it('can split a zero-sized tensor, axis=1', async () => {
    const a = tf.zeros([0, 4]);
    const numSplits = 4;
    const axis = 1;
    const res = tf.split(a, numSplits, axis);
    expect(res.length).toBe(4);
    expect(res[0].shape).toEqual([0, 1]);
    expect(res[1].shape).toEqual([0, 1]);
    expect(res[2].shape).toEqual([0, 1]);
    expect(res[3].shape).toEqual([0, 1]);
    expectArraysClose(await res[0].data(), []);
    expectArraysClose(await res[1].data(), []);
    expectArraysClose(await res[2].data(), []);
    expectArraysClose(await res[3].data(), []);
  });

  it('throws when passed a non-tensor', () => {
    expect(() => tf.split({} as tf.Tensor, 1))
        .toThrowError(/Argument 'x' passed to 'split' must be a Tensor/);
  });

  it('accepts a tensor-like object', async () => {
    const x = [[1, 2, 3, 4], [5, 6, 7, 8]];
    const res = tf.split(x, 2, 1);
    expect(res.length).toEqual(2);
    expect(res[0].shape).toEqual([2, 2]);
    expectArraysClose(await res[0].data(), [1, 2, 5, 6]);
    expect(res[1].shape).toEqual([2, 2]);
    expectArraysClose(await res[1].data(), [3, 4, 7, 8]);
  });

  it('gradient of 1st output', async () => {
    const a = tf.tensor1d([1, 2, 3]);
    const da = tf.grad(x => tf.split(x, [1, 2])[0])(a);

    expect(da.shape).toEqual([3]);
    expectArraysClose(await da.data(), [1, 0, 0]);
  });

  it('gradient with clones', async () => {
    const a = tf.tensor1d([1, 2, 3]);
    const da = tf.grad(x => tf.split(x.clone(), [1, 2])[0].clone())(a);

    expect(da.shape).toEqual([3]);
    expectArraysClose(await da.data(), [1, 0, 0]);
  });

  it('gradient of 2nd output', async () => {
    const a = tf.tensor1d([1, 2, 3]);
    const da = tf.grad(x => tf.split(x, [1, 2])[1])(a);

    expect(da.shape).toEqual([3]);
    expectArraysClose(await da.data(), [0, 1, 1]);
  });
});

describeWithFlags('setdiff1dAsync', ALL_ENVS, () => {
  it('1d int32 tensor', async () => {
    const x = tf.tensor1d([1, 2, 3, 4], 'int32');
    const y = tf.tensor1d([1, 2], 'int32');
    const [out, indices] = await tf.setdiff1dAsync(x, y);
    expect(out.dtype).toBe('int32');
    expect(indices.dtype).toBe('int32');
    expect(out.shape).toEqual([2]);
    expect(indices.shape).toEqual([2]);
    expectArraysClose(await out.data(), [3, 4]);
    expectArraysClose(await indices.data(), [2, 3]);
  });

  it('1d float32 tensor', async () => {
    const x = tf.tensor1d([1, 2, 3, 4], 'float32');
    const y = tf.tensor1d([1, 3], 'float32');
    const [out, indices] = await tf.setdiff1dAsync(x, y);
    expect(out.dtype).toBe('float32');
    expect(indices.dtype).toBe('int32');
    expect(out.shape).toEqual([2]);
    expect(indices.shape).toEqual([2]);
    expectArraysClose(await out.data(), [2, 4]);
    expectArraysClose(await indices.data(), [1, 3]);
  });

  it('empty output', async () => {
    const x = tf.tensor1d([1, 2, 3, 4], 'float32');
    const y = tf.tensor1d([1, 2, 3, 4], 'float32');
    const [out, indices] = await tf.setdiff1dAsync(x, y);
    expect(out.dtype).toBe('float32');
    expect(indices.dtype).toBe('int32');
    expect(out.shape).toEqual([0]);
    expect(indices.shape).toEqual([0]);
    expectArraysClose(await out.data(), []);
    expectArraysClose(await indices.data(), []);
  });

  it('tensor like', async () => {
    const x = [1, 2, 3, 4];
    const y = [1, 3];
    const [out, indices] = await tf.setdiff1dAsync(x, y);
    expect(out.dtype).toBe('float32');
    expect(indices.dtype).toBe('int32');
    expect(out.shape).toEqual([2]);
    expect(indices.shape).toEqual([2]);
    expectArraysClose(await out.data(), [2, 4]);
    expectArraysClose(await indices.data(), [1, 3]);
  });

  it('should throw if x is not 1d', async () => {
    const x = tf.tensor2d([1, 2, 3, 4], [4, 1], 'float32');
    const y = tf.tensor1d([1, 2, 3, 4], 'float32');
    try {
      await tf.setdiff1dAsync(x, y);
      throw new Error('The line above should have thrown an error');
    } catch (ex) {
      expect(ex.message).toBe('x should be 1D tensor, but got x (4,1).');
    }
  });

  it('should throw if y is not 1d', async () => {
    const x = tf.tensor1d([1, 2, 3, 4], 'float32');
    const y = tf.tensor2d([1, 2, 3, 4], [4, 1], 'float32');
    try {
      await tf.setdiff1dAsync(x, y);
      throw new Error('The line above should have thrown an error');
    } catch (ex) {
      expect(ex.message).toBe('y should be 1D tensor, but got y (4,1).');
    }
  });

  it('should throw if x and y dtype mismatch', async () => {
    const x = tf.tensor1d([1, 2, 3, 4], 'float32');
    const y = tf.tensor1d([1, 2, 3, 4], 'int32');
    try {
      await tf.setdiff1dAsync(x, y);
      throw new Error('The line above should have thrown an error');
    } catch (ex) {
      expect(ex.message)
          .toBe(
              'x and y should have the same dtype,' +
              ' but got x (float32) and y (int32).');
    }
  });
});
