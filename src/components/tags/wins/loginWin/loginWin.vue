<!--
 * LoginWin
 * @author Perlou <perloukevin@gmail.com>
 * @date 2017-08-01 16:45:00
 * @since 2.0.0
 -->
<template>
    <el-dialog
        title="Login"
        custom-class="win login-win"
        :visible.sync="isShow">
        <div class="win-con">
            <el-form
                label-position="left"
                label-width="90px"
                ref="form">

                <el-form-item label="用户名">
                    
                </el-form-item>

            </el-form>
        </div>
    </el-dialog>
</template>
<style src="./loginWin.scss" lang="scss" scoped></style>
