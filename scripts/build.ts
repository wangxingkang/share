import path from 'path';
import glob from 'glob';
import { execa } from '@walrus/cli-utils';

const SRC_DIR = path.join(__dirname, '../src');

async function build() {
  // 获取需要编译的文件
  const files = glob.sync(`${SRC_DIR}/*.md`);

  // 执行编译
  files.forEach((filePath) => {
    execa.sync('npx', ['nodeppt', 'build', filePath]);
  });
}

build();
