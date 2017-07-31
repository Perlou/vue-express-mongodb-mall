<!--
 * Header
 * @author Perlou <perloukevin@gmail.com>
 * @date 2017-07-31 17:59:56
 * @since 2.0.0
 -->
<template>
    <header class="global-header">
       <div class="header-wrap">
            <div class="header flex-both-side">
                <div class="logo">
                    在线商城
                </div>
                <div class="header-operation">
                    <span>admin</span>
                    <el-button type="text">文字按钮</el-button>
                </div>
            </div>
       </div>
       <div class="breab-wrap">
            <div class="breab flex-both-side">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
       </div>
    </header>
</template>
<style src="./header.scss" lang="scss" scoped></style>
