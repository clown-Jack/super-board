import fs, { promises as fsPromiseAPIs } from 'fs';

const fileAction = {
  /**
   * @description 读取文件内容
   * @param path 路径
   * @param encoding 编码形式
   * @returns {Promise<string>}
   */
  read: (path: string, encoding?: BufferEncoding): Promise<string> => {
    return fsPromiseAPIs.readFile(path, { encoding: encoding || 'utf-8' });
  },
  /**
   * @description 写入文件内容
   * @param path  路径
   * @param content 内容
   * @param encoding 编码形式
   * @returns {Promise<void>}
   */
  write: (path: string, content: string, encoding: BufferEncoding): Promise<void> => {
    return fsPromiseAPIs.writeFile(path, content, { encoding: encoding || 'utf-8' });
  },
  /**
   * @description 重命名文件
   * @param oldPath {string} 旧地址
   * @param newPath {string} 新地址
   * @returns {Promise<void>}
   */
  rename: (oldPath: string, newPath: string): Promise<void> => {
    return fsPromiseAPIs.rename(oldPath, newPath);
  },
  /**
   * @description 删除文件
   * @param path {string} 路径
   * @returns {Promise<void>}
   */
  delete: (path: string): Promise<void> => {
    return fsPromiseAPIs.unlink(path);
  },
  /**
   * @description 是否存在文件
   * @param path {string} 路径
   * @returns  {Promise<void>}
   */
  hasFile: (path: string): Promise<void> => {
    return fsPromiseAPIs.access(path, fs.constants.F_OK);
  },
  /**
   * @description 是否可以写入此文件
   * @param path {string} 路径
   * @returns {Promise<void>}
   */
  canWrite: (path: string): Promise<void> => {
    return fsPromiseAPIs.access(path, fs.constants.W_OK);
  },
  /**
   * @description 是否可以读此文件
   * @param path {string} 路径
   * @returns {Promise<void>}
   */
  canRead: (path: string): Promise<void> => {
    return fsPromiseAPIs.access(path, fs.constants.R_OK);
  },
};

export default fileAction;
